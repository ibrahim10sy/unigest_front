import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { Inscription } from 'src/app/models/Inscription';
import { Medias, MediaType } from 'src/app/models/Medias';
import { MediaService } from 'src/app/services/MediasService.service';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from "@angular/material/progress-bar";

@Component({
  selector: 'vex-inscription-detail',
  standalone: true,
  imports: [MatDialogActions, MatIconModule, MatDialogContent, CommonModule, MatProgressBarModule],
  templateUrl: './inscription-detail.component.html',
  styleUrl: './inscription-detail.component.scss'
})
export class InscriptionDetailComponent {

  inscription!: Inscription;
  files: Medias[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mediaService: MediaService,
    private dialogRef: MatDialogRef<InscriptionDetailComponent>
  ) {}

  ngOnInit(): void {
    this.inscription = this.data;
    this.loadFiles();
  }

  loadFiles() {
    this.mediaService
      .getByType(
        MediaType.DOSSIER_INSCRIPTION,
        this.inscription.id!
      )
      .subscribe((res:any) => {
        this.files = res;
      });
  }

  voirFile(file: Medias) {
    window.open(file.fichierUrl, '_blank');
  }

  deleteFile(file: Medias) {
    if (!file.idMedia) return;

    this.mediaService.delete(file.idMedia).subscribe(() => {
      this.files = this.files.filter(
        f => f.idMedia !== file.idMedia
      );
    });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const media = {
      type: MediaType.DOSSIER_INSCRIPTION,
      referenceId: this.inscription.id!
    };

    this.mediaService.create(media, file).subscribe((res: any) => {
      this.files.push(res);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
