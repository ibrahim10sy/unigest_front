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

@Component({
  selector: 'vex-matiere-form',
  standalone: true,
   imports: [
      CommonModule, 
      ReactiveFormsModule, 
      MatDialogModule, 
      MatInputModule, 
      MatFormFieldModule, 
      MatButtonModule, 
      MatIconModule, 
      MatDividerModule
    ],
  templateUrl: './matiere-form.component.html',
  styleUrl: './matiere-form.component.scss'
})
export class MatiereFormComponent  implements OnInit{
   form: FormGroup;
  mode: 'create' | 'update' = 'create';
  
  constructor(
      private fb: FormBuilder,
      private matiereService: MatiereService,
      private dialogRef: MatDialogRef<MatiereFormComponent>,
      @Inject(MAT_DIALOG_DATA) public defaults: Matiere | null
    ) {
      this.form = this.fb.group({
        nom: [this.defaults?.nom || '', [Validators.required]],
        coefficient: [this.defaults?.coefficient || '', [Validators.required]]
      });
    }

  ngOnInit(): void {
      if (this.defaults) this.mode = 'update';
    }
  
    save() {
      if (this.form.invalid) return;
      const matiere = this.form.value;
  
      if (this.mode === 'update') {
        this.matiereService.modifierMatiere(this.defaults!.id!, matiere).subscribe({
          next: () => this.handleSuccess('Matière mis à jour'),
          error: () => Swal.fire('Erreur', 'Échec de la modification', 'error')
        });
      } else {
        this.matiereService.ajouterMatiere(matiere).subscribe({
          next: () => this.handleSuccess('Matiere ajouté'),
          error: () => Swal.fire('Erreur', "Échec de l'ajout", 'error')
        });
      }
    }
  
    handleSuccess(message: string) {
      Swal.fire({ icon: 'success', title: message, timer: 1500, showConfirmButton: false });
      this.dialogRef.close(true);
    }


}
