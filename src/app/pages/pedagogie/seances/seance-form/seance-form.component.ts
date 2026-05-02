import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { SeanceService } from 'src/app/services/seance.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-seance-form',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule, MatDialogContent,CommonModule, MatFormFieldModule, MatSelectModule, MatDialogActions],
  templateUrl: './seance-form.component.html',
  styleUrl: './seance-form.component.scss'
})
export class SeanceFormComponent {

  matiereCtrl = new FormControl<string | null>(null);

  constructor(
    private seanceService: SeanceService,
    private dialogRef: MatDialogRef<SeanceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  demarrer() {
    if (!this.matiereCtrl.value) return;

    this.seanceService
      .demarrerSeance(this.data.affectationId, this.matiereCtrl.value)
      .subscribe(res => {
        this.dialogRef.close(res);
      });
  }

  close() {
    this.dialogRef.close();
  }
}