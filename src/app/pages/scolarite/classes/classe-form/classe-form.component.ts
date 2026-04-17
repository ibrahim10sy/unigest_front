import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ClasseService } from 'src/app/services/classe.service';
import { FiliereService } from 'src/app/services/filiere.service';
import Swal from 'sweetalert2';
import { NiveauService } from 'src/app/services/niveau.service';
import { Niveau } from 'src/app/models/Niveau';
import { Filiere } from 'src/app/models/Filiere';

@Component({
  selector: 'vex-classe-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, 
    MatFormFieldModule, MatButtonModule, MatSelectModule, MatIconModule, MatDividerModule
  ],
  templateUrl: './classe-form.component.html'
})

export class ClasseFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
filieresFiltrees: Filiere[] = [];
  

  constructor(
    private fb: FormBuilder,
    private classeService: ClasseService,
    private filiereService: FiliereService, // Pour charger la liste des filières
    private dialogRef: MatDialogRef<ClasseFormComponent>,
    private niveauService:NiveauService,
    @Inject(MAT_DIALOG_DATA) public defaults: any
  ) {
    this.form = this.fb.group({
      nom: [this.defaults?.nom || '', Validators.required],
      filiereId: [this.defaults?.filiere?.id || '', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.defaults) this.mode = 'update';
    
  
        // this.niveauService.getAllNiveaux().subscribe(data => this.niveaux = data);
         // Si on est en mode édition, on charge déjà les filières du niveau actuel
         this.chargerFilieres();
 

  }

  onNiveauChange(niveauId: number) {
  // Réinitialiser le champ filière si on change de niveau
  this.form.get('filiereId')?.setValue(null);
  this.chargerFilieres();
}

chargerFilieres() {
  this.filiereService.getAllFilieres().subscribe(res => {
    this.filieresFiltrees = res;
  });
   }

  save() {
    if (this.form.invalid) return;
    const val = this.form.value;

    if (this.mode === 'update') {
      this.classeService.modifierClasse(this.defaults.id, val.nom, val.filiereId).subscribe({
        next: () => this.handleSuccess('Classe modifiée'),
        error: () => Swal.fire('Erreur', 'Échec', 'error')
      });
    } else {
      this.classeService.creerClasse(val.nom, val.filiereId).subscribe({
        next: () => this.handleSuccess('Classe créée'),
        error: () => Swal.fire('Erreur', 'Échec', 'error')
      });
    }
  }

  handleSuccess(msg: string) {
    Swal.fire({ icon: 'success', title: msg, timer: 1500, showConfirmButton: false });
    this.dialogRef.close(true);
  }
}