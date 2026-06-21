import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { ClasseService } from 'src/app/services/classe.service';
import Swal from 'sweetalert2';
import { EmploiDuTempsFormComponent } from '../emploi-du-temps-form/emploi-du-temps-form.component';
import { MatIconModule } from '@angular/material/icon';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { EmploiDuTemps } from 'src/app/models/emploi-du-temps.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

interface Creneau { heureDebut: string; heureFin: string; }

@Component({
  selector: 'vex-emploi-du-temps-list',
  standalone: true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    CommonModule,
    FormsModule,
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective,
    VexBreadcrumbsComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './emploi-du-temps-list.component.html',
  styleUrl: './emploi-du-temps-list.component.scss'
})
export class EmploiDuTempsListeComponent implements OnInit {

  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  classeCtrl = new UntypedFormControl(null);

  displayedColumns: string[] = ['jour', 'horaire', 'matiere', 'enseignant', 'periode', 'statut', 'actions'];
  dataSource = new MatTableDataSource<EmploiDuTemps>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  classes: any[] = [];
  viewMode: 'liste' | 'grille' = 'liste';

  jours = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];
  joursLabels: Record<string, string> = {
    LUNDI: 'Lundi', MARDI: 'Mardi', MERCREDI: 'Mercredi',
    JEUDI: 'Jeudi', VENDREDI: 'Vendredi', SAMEDI: 'Samedi'
  };

  creneaux: Creneau[] = [];
  cellMap = new Map<string, EmploiDuTemps>();
  isLoading = false;

  constructor(
    private service: EmploiDuTempsService,
    private classeService: ClasseService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.classeService.getAllClasses().subscribe(c => {
      this.classes = c;
      if (c.length > 0) {
        this.classeCtrl.setValue(c[0].id, { emitEvent: true });
      }
    });

    this.classeCtrl.valueChanges.subscribe(() => this.chargerParClasse());

    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v?.trim().toLowerCase() ?? '')
    );
  }

  chargerParClasse(): void {
    const classeId = this.classeCtrl.value;
    if (!classeId) return;
    this.isLoading = true;
    this.service.getByClasse(classeId).subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.construireGrille(res);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Erreur', 'Impossible de charger les emplois du temps', 'error');
      }
    });
  }

  refresh(): void {
    this.chargerParClasse();
  }

  // ─── Grille hebdomadaire ──────────────────────────────────────────────────

  construireGrille(emplois: EmploiDuTemps[]): void {
    const slotSet = new Map<string, Creneau>();
    emplois.forEach(e => {
      const debut = this.toTimeStr(e.heureDebut);
      const fin   = this.toTimeStr(e.heureFin);
      if (debut && fin) {
        const key = `${debut}|${fin}`;
        if (!slotSet.has(key)) slotSet.set(key, { heureDebut: debut, heureFin: fin });
      }
    });
    this.creneaux = [...slotSet.values()].sort((a, b) => a.heureDebut.localeCompare(b.heureDebut));

    this.cellMap = new Map();
    emplois.forEach(e => {
      const debut = this.toTimeStr(e.heureDebut);
      if (!debut) return;
      (e.jours as string[])?.forEach(jour => {
        this.cellMap.set(`${jour}|${debut}`, e);
      });
    });
  }

  private toTimeStr(t: any): string {
    if (!t) return '';
    if (Array.isArray(t)) {
      const [h, m] = t;
      return `${String(h).padStart(2, '0')}:${String(m ?? 0).padStart(2, '0')}`;
    }
    return String(t).substring(0, 5); // "HH:mm" depuis "HH:mm:ss"
  }

  getCellule(jour: string, creneau: Creneau): EmploiDuTemps | null {
    return this.cellMap.get(`${jour}|${creneau.heureDebut}`) ?? null;
  }

  // ─── Exports ──────────────────────────────────────────────────────────────

  private nomClasse(): string {
    return this.classes.find(c => c.id === this.classeCtrl.value)?.nom ?? this.classeCtrl.value;
  }

  private telecharger(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  exporterPdf(): void {
    const classeId = this.classeCtrl.value;
    if (!classeId) { Swal.fire('Attention', 'Sélectionnez une classe', 'warning'); return; }
    this.service.exportPdf(classeId).subscribe({
      next: (blob) => this.telecharger(blob, `emploi-du-temps-${this.nomClasse()}.pdf`),
      error: () => Swal.fire('Erreur', 'Impossible de générer le PDF', 'error')
    });
  }

  exporterExcel(): void {
    const classeId = this.classeCtrl.value;
    if (!classeId) { Swal.fire('Attention', 'Sélectionnez une classe', 'warning'); return; }
    this.service.exportExcel(classeId).subscribe({
      next: (blob) => this.telecharger(blob, `emploi-du-temps-${this.nomClasse()}.xlsx`),
      error: () => Swal.fire('Erreur', 'Impossible de générer le fichier Excel', 'error')
    });
  }

  exporterWord(): void {
    const classeId = this.classeCtrl.value;
    if (!classeId) { Swal.fire('Attention', 'Sélectionnez une classe', 'warning'); return; }
    this.service.exportWord(classeId).subscribe({
      next: (blob) => this.telecharger(blob, `emploi-du-temps-${this.nomClasse()}.docx`),
      error: () => Swal.fire('Erreur', 'Impossible de générer le fichier Word', 'error')
    });
  }

  // ─── CRUD ─────────────────────────────────────────────────────────────────

  ajouter(): void {
    this.dialog.open(EmploiDuTempsFormComponent, { width: '800px' })
      .afterClosed().subscribe(res => {
        if (res) { Swal.fire({ icon: 'success', title: 'Emploi ajouté', timer: 1500, showConfirmButton: false }); this.refresh(); }
      });
  }

  modifier(row: any): void {
    this.dialog.open(EmploiDuTempsFormComponent, { width: '800px', data: row })
      .afterClosed().subscribe(res => {
        if (res) { Swal.fire({ icon: 'success', title: 'Modification effectuée', timer: 1500, showConfirmButton: false }); this.refresh(); }
      });
  }

  supprimer(row: any): void {
    Swal.fire({
      title: 'Supprimer cet emploi ?', text: 'Cette action est irréversible.',
      icon: 'warning', showCancelButton: true,
      confirmButtonText: 'Oui, supprimer', cancelButtonText: 'Annuler'
    }).then(r => {
      if (r.isConfirmed) {
        this.service.delete(row.id).subscribe({
          next: () => { Swal.fire({ icon: 'success', title: 'Supprimé', timer: 1500, showConfirmButton: false }); this.refresh(); },
          error: () => Swal.fire('Erreur', 'Suppression impossible', 'error')
        });
      }
    });
  }

  appliquerFiltre(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  getJoursLabel(jours: string[]): string {
    return jours?.map(j => j.charAt(0) + j.slice(1).toLowerCase()).join(' • ') ?? '';
  }

  getNomClasse(): string {
    return this.classes.find(c => c.id === this.classeCtrl.value)?.nom ?? '';
  }
}
