import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { Medias, MediaType } from 'src/app/models/Medias';
import { Depense } from 'src/app/services/DepenseService.service';
import { MediaService } from 'src/app/services/MediasService.service';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-depense-detail',
  standalone: true,
  imports: [MatIconModule, MatDialogActions, MatDialogContent, CommonModule],
  templateUrl: './depense-detail.component.html',
  styleUrl: './depense-detail.component.scss'
})
export class DepenseDetailComponent implements OnInit {

  depense!: Depense;
  files: Medias[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mediaService: MediaService,
    private dialogRef: MatDialogRef<DepenseDetailComponent>
  ) {}

  ngOnInit(): void {
    this.depense = this.data;
    this.loadFiles();
  }

  loadFiles() {
    this.mediaService
      .getByType(MediaType.JUSTIFICATIF_DEPENSE, this.depense.id!)
      .subscribe(res => {
        this.files = res;
      });
  }

  voirFile(file: Medias) {
    window.open(file.fichierUrl, '_blank');
  }

  deleteFile(file: Medias) {
    if (!file.idMedia) return;

    this.mediaService.delete(file.idMedia).subscribe(() => {
      this.files = this.files.filter(f => f.idMedia !== file.idMedia);
    });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const media = {
      type: MediaType.JUSTIFICATIF_DEPENSE,
      referenceId: this.depense.id!
    };

    this.mediaService.create(media, file).subscribe((res: any) => {
      this.files.push(res);
    });
  }

  close() {
    this.dialogRef.close();
  }
}