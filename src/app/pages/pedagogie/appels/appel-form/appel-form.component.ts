import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StatutPresence } from 'src/app/models/Appel';
import { Etudiant } from 'src/app/models/Etudiant';
import { Seance } from 'src/app/models/Seance';
import { AppelService } from 'src/app/services/appel.service';
import { ClasseService } from 'src/app/services/classe.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-appel-form',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatDividerModule, CommonModule],
  templateUrl: './appel-form.component.html',
  styleUrl: './appel-form.component.scss'
})
export class AppelFormComponent implements OnInit {
  seance!: Seance;
  etudiants: Etudiant[] = [];

  StatutPresence = StatutPresence;

  loadingIds = new Set<number>();
  statutsMap = new Map<number, StatutPresence>();

  constructor(
    private appelService: AppelService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppelFormComponent>,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.seance = this.data.seance;
    this.etudiants = this.data.etudiants || [];

    this.chargerAppels();
  }

  chargerAppels() {
    if (!this.seance?.id) return;

    this.appelService.getBySeance(this.seance.id).subscribe(res => {
      this.statutsMap.clear();

      res.forEach(appel => {
        this.statutsMap.set(appel.etudiant.id!, appel.statut);
      });
    });
  }

  marquer(etudiant: Etudiant, statut: StatutPresence, minutes: number = 0) {
    if (!this.seance?.id || !etudiant?.id) return;

    const etuId = etudiant.id!;

    this.loadingIds.add(etuId);

    this.appelService
      .faireAppel(this.seance.id, etuId, statut, minutes)
      .subscribe({
        next: () => {
          this.loadingIds.delete(etuId);

          // 🔥 UPDATE UI DIRECT
          this.statutsMap.set(etuId, statut);

          this.snack.open('Appel enregistré', 'OK', { duration: 1500 });
        },
        error: () => {
          this.loadingIds.delete(etuId);
          this.snack.open('Erreur appel', 'Fermer', { duration: 2000 });
        }
      });
  }

  marquerRetard(etudiant: Etudiant, minutes: number = 10) {
    this.marquer(etudiant, StatutPresence.RETARD, minutes);
  }

  fermer() {
    this.dialogRef.close(true);
  }
}