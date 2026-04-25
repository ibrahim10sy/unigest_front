import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { Medias, MediaType } from 'src/app/models/Medias';
import { Enseignant } from 'src/app/services/enseignant.service';
import { MediaService } from 'src/app/services/MediasService.service';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-enseignant-detail',
  standalone: true,
  imports: [MatDialogActions, MatIconModule, MatDialogContent,CommonModule],
  templateUrl: './enseignant-detail.component.html',
  styleUrl: './enseignant-detail.component.scss'
})
export class EnseignantDetailComponent {

   enseignant!: Enseignant;
  cvs: Medias[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mediaService: MediaService,
    private dialogRef: MatDialogRef<EnseignantDetailComponent>
  ) {}

  ngOnInit(): void {
    this.enseignant = this.data;

    this.loadCv();
  }

  loadCv() {
    this.mediaService
      .getByType(MediaType.CV_ENSEIGNANT, this.enseignant.id!)
      .subscribe(res => {
        this.cvs = res;
      });
  }

  voirCv(cv: Medias) {
    window.open(cv.fichierUrl, '_blank');
  }

  deleteCv(cv: Medias) {
    if (!cv.idMedia) return;

    this.mediaService.delete(cv.idMedia).subscribe(() => {
      this.cvs = this.cvs.filter(c => c.idMedia !== cv.idMedia);
    });
  }

  openFileInput(input: HTMLInputElement) {
    input.click();
  }

  uploadCv(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const media = {
      type: MediaType.CV_ENSEIGNANT,
      referenceId: this.enseignant.id!
    };

    this.mediaService.create(media, file).subscribe((res : any) => {
      this.cvs.push(res);
    });
  }

  close() {
    this.dialogRef.close();
  }
  
}
