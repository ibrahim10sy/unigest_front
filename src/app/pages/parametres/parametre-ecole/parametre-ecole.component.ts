import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ParametreEcoleService } from 'src/app/services/ParametreEcoleService';

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
    MatSnackBarModule
  ],
  templateUrl: './parametre-ecole.component.html'
})
export class ParametreEcoleComponent implements OnInit {

  ecoleForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private parametreService: ParametreEcoleService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.ecoleForm = this.fb.group({
      nomEcole:             ['', Validators.required],
      adresseEcole:         [''],
      telephoneEcole:       [''],
      quotaClasse:          [40, [Validators.required, Validators.min(0), Validators.max(100)]],
      quotaComposition:     [60, [Validators.required, Validators.min(0), Validators.max(100)]],
      coefficientConduite:  [1,  [Validators.required, Validators.min(0)]]
    });

    this.chargerParametres();
  }

  chargerParametres(): void {
    this.parametreService.getParametres().subscribe(p => {
      this.ecoleForm.patchValue(p);
    });
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
}
