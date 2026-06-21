import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { ParametreEcoleService } from 'src/app/services/ParametreEcoleService';
import { AppreciationSeuil } from 'src/app/models/AppreciationSeuil';

@Component({
  selector: 'app-appreciation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTooltipModule,
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective,
    VexBreadcrumbsComponent
  ],
  templateUrl: './appreciation.component.html'
})
export class AppreciationComponent implements OnInit {

  seuilsForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private parametreService: ParametreEcoleService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.seuilsForm = this.fb.group({ seuils: this.fb.array([]) });
    this.chargerSeuils();
  }

  get seuils(): FormArray {
    return this.seuilsForm.get('seuils') as FormArray;
  }

  /** Seuils triés par seuilMin croissant */
  get seuilsTries(): AppreciationSeuil[] {
    return [...this.seuils.value as AppreciationSeuil[]].sort((a, b) => a.seuilMin - b.seuilMin);
  }

  chargerSeuils(): void {
    this.parametreService.getSeuils().subscribe(liste => {
      this.seuils.clear();
      [...liste].sort((a, b) => a.seuilMin - b.seuilMin)
                .forEach(s => this.seuils.push(this.creerSeuilForm(s)));
    });
  }

  creerSeuilForm(s?: AppreciationSeuil) {
    return this.fb.group({
      id:       [s?.id ?? null],
      seuilMin: [s?.seuilMin ?? 0,    [Validators.required, Validators.min(0), Validators.max(20)]],
      seuilMax: [s?.seuilMax ?? null, [Validators.min(0), Validators.max(20)]],
      libelle:  [s?.libelle ?? '',    Validators.required]
    });
  }

  ajouterSeuil(): void {
    this.seuils.push(this.creerSeuilForm());
  }

  supprimerSeuil(index: number): void {
    this.seuils.removeAt(index);
  }

  sauvegarder(): void {
    if (this.seuilsForm.invalid) return;
    this.loading = true;
    const seuils: AppreciationSeuil[] = this.seuils.value;
    this.parametreService.sauvegarderSeuils(seuils).subscribe({
      next: (liste) => {
        this.seuils.clear();
        [...liste].sort((a, b) => a.seuilMin - b.seuilMin)
                  .forEach(s => this.seuils.push(this.creerSeuilForm(s)));
        this.snackbar.open('Appréciations sauvegardées', 'OK', { duration: 3000 });
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Erreur lors de la sauvegarde', 'OK', { duration: 3000 });
        this.loading = false;
      }
    });
  }
}
