import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogContent
} from '@angular/material/dialog';
import { Medias, MediaType } from 'src/app/models/Medias';
import { Depense } from 'src/app/services/DepenseService.service';
import { MediaService } from 'src/app/services/MediasService.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Appel } from 'src/app/models/Appel';

@Component({
  selector: 'vex-appel-details',
  standalone: true,
  imports: [MatIconModule, MatDialogActions, MatDialogContent, CommonModule],
  templateUrl: './appel-details.component.html',
  styleUrl: './appel-details.component.scss'
})
export class AppelDetailsComponent implements OnInit {
  appel!: Appel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppelDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.appel = this.data;
  }

  close() {
    this.dialogRef.close();
  }
}
