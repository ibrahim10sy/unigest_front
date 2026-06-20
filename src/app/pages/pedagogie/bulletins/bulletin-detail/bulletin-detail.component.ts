import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BulletinService } from 'src/app/services/BulletinService.service';
import { ParametreEcoleService } from 'src/app/services/ParametreEcoleService';
import { Bulletin } from 'src/app/models/Bulletin';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-bulletin-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './bulletin-detail.component.html',
  styleUrl: './bulletin-detail.component.scss'
})
export class BulletinDetailComponent implements OnInit {
  bulletin: Bulletin | null = null;
  isLoading = true;
  isDownloading = false;
  coeffConduite = 1.0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { bulletinId: number },
    _dialogRef: MatDialogRef<BulletinDetailComponent>,
    private bulletinService: BulletinService,
    private parametreService: ParametreEcoleService
  ) {}

  ngOnInit(): void {
    this.parametreService.getParametres().subscribe(p => {
      this.coeffConduite = p.coefficientConduite ?? 1.0;
    });
    this.bulletinService.getBulletin(this.data.bulletinId).subscribe({
      next: (b) => { this.bulletin = b; this.isLoading = false; },
      error: () => { this.isLoading = false; }
    });
  }

  telechargerPdf(): void {
    if (!this.bulletin?.id) return;
    this.isDownloading = true;
    this.bulletinService.telechargerPdf(this.bulletin.id).subscribe({
      next: (blob) => {
        this.declencherTelechargement(blob, this.nomFichier('pdf'));
        this.isDownloading = false;
      },
      error: () => {
        this.isDownloading = false;
        Swal.fire('Erreur', 'Impossible de générer le PDF', 'error');
      }
    });
  }

  telechargerWord(): void {
    if (!this.bulletin?.id) return;
    this.isDownloading = true;
    this.bulletinService.telechargerWord(this.bulletin.id).subscribe({
      next: (blob) => {
        this.declencherTelechargement(blob, this.nomFichier('docx'));
        this.isDownloading = false;
      },
      error: () => {
        this.isDownloading = false;
        Swal.fire('Erreur', 'Impossible de générer le document Word', 'error');
      }
    });
  }

  getTotalCoeff(): number {
    let total = (this.bulletin?.lignes ?? []).reduce((sum, l) => sum + l.coefficient, 0);
    if (this.bulletin?.noteConduite != null) total += this.coeffConduite;
    return total;
  }

  getTotalMoyCoeff(): number {
    let total = (this.bulletin?.lignes ?? []).reduce((sum, l) => sum + l.moyenneMatiere * l.coefficient, 0);
    if (this.bulletin?.noteConduite != null) total += this.bulletin.noteConduite * this.coeffConduite;
    return total;
  }

  getMention(moyenne: number): string {
    if (moyenne >= 18) return 'Excellent';
    if (moyenne >= 16) return 'Très bien';
    if (moyenne >= 14) return 'Bien';
    if (moyenne >= 12) return 'Assez bien';
    if (moyenne >= 10) return 'Passable';
    if (moyenne >=  5) return 'Insuffisant';
    return 'Très insuffisant';
  }

  getMentionClass(moyenne: number): string {
    if (moyenne >= 14) return 'text-green-600 font-semibold';
    if (moyenne >= 10) return 'text-blue-600 font-semibold';
    return 'text-red-600 font-semibold';
  }

  private declencherTelechargement(blob: Blob, nom: string): void {
    const url = window.URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = nom;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private nomFichier(ext: string): string {
    const b = this.bulletin!;
    return `bulletin_${b.etudiant?.nom}_${b.etudiant?.prenom}_${b.typePeriode}${b.periode}.${ext}`
      .toLowerCase().replace(/ /g, '_');
  }
}
