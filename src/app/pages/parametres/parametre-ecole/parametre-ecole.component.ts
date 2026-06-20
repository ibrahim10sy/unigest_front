import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor, NgIf } from '@angular/common';
import { ParametreEcoleService } from 'src/app/services/ParametreEcoleService';
import { AppreciationSeuil } from 'src/app/models/AppreciationSeuil';

@Component({
  selector: 'app-parametre-ecole',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    NgFor,
    NgIf
  ],
  templateUrl: './parametre-ecole.component.html'
})
export class ParametreEcoleComponent implements OnInit {

  ecoleForm!: FormGroup;
  seuilsForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private parametreService: ParametreEcoleService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.ecoleForm = this.fb.group({
      nomEcole:       ['', Validators.required],
      adresseEcole:   [''],
      telephoneEcole: [''],
      quotaClasse:          [40, [Validators.required, Validators.min(0), Validators.max(100)]],
      quotaComposition:     [60, [Validators.required, Validators.min(0), Validators.max(100)]],
      coefficientConduite:  [1,  [Validators.required, Validators.min(0)]]
    });

    this.seuilsForm = this.fb.group({
      seuils: this.fb.array([])
    });

    this.chargerParametres();
    this.chargerSeuils();
  }

  get seuils(): FormArray {
    return this.seuilsForm.get('seuils') as FormArray;
  }

  chargerParametres(): void {
    this.parametreService.getParametres().subscribe(p => {
      this.ecoleForm.patchValue(p);
    });
  }

  chargerSeuils(): void {
    this.parametreService.getSeuils().subscribe(liste => {
      this.seuils.clear();
      liste.forEach(s => this.seuils.push(this.creerSeuilForm(s)));
    });
  }

  creerSeuilForm(s?: AppreciationSeuil) {
    return this.fb.group({
      id:       [s?.id ?? null],
      seuilMin: [s?.seuilMin ?? 0, [Validators.required, Validators.min(0), Validators.max(20)]],
      libelle:  [s?.libelle ?? '', Validators.required]
    });
  }

  ajouterSeuil(): void {
    this.seuils.push(this.creerSeuilForm());
  }

  supprimerSeuil(index: number): void {
    this.seuils.removeAt(index);
  }

  sauvegarderEcole(): void {
    if (this.ecoleForm.invalid) return;
    this.loading = true;
    this.parametreService.sauvegarderParametres(this.ecoleForm.value).subscribe({
      next: () => {
        this.snackbar.open('Paramètres école sauvegardés', 'OK', { duration: 3000 });
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Erreur lors de la sauvegarde', 'OK', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  sauvegarderSeuils(): void {
    if (this.seuilsForm.invalid) return;
    this.loading = true;
    const seuils: AppreciationSeuil[] = this.seuils.value;
    this.parametreService.sauvegarderSeuils(seuils).subscribe({
      next: (liste) => {
        this.seuils.clear();
        liste.forEach(s => this.seuils.push(this.creerSeuilForm(s)));
        this.snackbar.open('Seuils d\'appréciation sauvegardés', 'OK', { duration: 3000 });
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Erreur lors de la sauvegarde', 'OK', { duration: 3000 });
        this.loading = false;
      }
    });
  }
}
