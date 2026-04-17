import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import Swal from 'sweetalert2';
import { Matiere, MatiereService } from 'src/app/services/matiere.service';
import { ClasseMatiere } from 'src/app/models/ClasseMatiere';
import { ClasseMatiereService } from 'src/app/services/ClasseMatiereService';
import { Classe } from 'src/app/models/Classe';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'vex-classematiere',
    standalone: true,
     imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule
],
  templateUrl: './classematiere.component.html',
  styleUrl: './classematiere.component.scss'
})
export class ClassematiereComponent implements OnInit{
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  matieres: Matiere[]=[];
  
  constructor(
        private fb: FormBuilder,
        private matiereService: MatiereService,
        private classeService : ClasseMatiereService,
        private dialogRef: MatDialogRef<ClassematiereComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {
    classe: Classe,
    classeMatiere?: ClasseMatiere
  }
      ) {
        this.form = this.fb.group({
  classe: [data.classe], // 🔥 important
  matiere: [data.classeMatiere?.matiere || '', [Validators.required]],
  coefficient: [data.classeMatiere?.coefficient || '', [Validators.required]]
});
      }
      
 ngOnInit() {
  if (this.data.classeMatiere) {
    this.mode = 'update';

    this.form.patchValue({
      classe: this.data.classe,
      matiere: this.data.classeMatiere.matiere,
      coefficient: this.data.classeMatiere.coefficient
    });

  } else {
    this.mode = 'create';
  }

  this.matiereService.getAllMatieres().subscribe(res => this.matieres = res);
}

 compareMatiere(p1: Matiere, p2: Matiere): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

   save() {
  if (this.form.invalid) return;

  const formValue = this.form.value;
  console.log('form value ',formValue)
  if (this.mode === 'update') {
    this.classeService.update(
      this.data.classeMatiere!.id!,
      formValue
    ).subscribe({
      next: () => this.handleSuccess('Matière mise à jour'),
      error: () => Swal.fire('Erreur', 'Échec de la modification', 'error')
    });

  } else {
    this.classeService.add(
      this.data.classe.id!,
      formValue.matiere.id || formValue.matiere,
      formValue.coefficient
    ).subscribe({
      next: () => this.handleSuccess('Matière ajoutée'),
      error: () => Swal.fire('Erreur', "Échec de l'ajout", 'error')
    });
  }
}
   
     handleSuccess(message: string) {
       Swal.fire({ icon: 'success', title: message, timer: 1500, showConfirmButton: false });
       this.dialogRef.close(true);
     }
 
}
