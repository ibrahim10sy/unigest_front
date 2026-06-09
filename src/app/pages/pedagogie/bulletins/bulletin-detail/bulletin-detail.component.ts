import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BulletinService } from 'src/app/services/BulletinService.service';
import { Bulletin } from 'src/app/models/Bulletin';

@Component({
  selector: 'vex-bulletin-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './bulletin-detail.component.html',
  styleUrl: './bulletin-detail.component.scss'
})
export class BulletinDetailComponent implements OnInit {
  bulletin: Bulletin | null = null;
  isLoading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { bulletinId: number },
    private dialogRef: MatDialogRef<BulletinDetailComponent>,
    private bulletinService: BulletinService
  ) {}

  ngOnInit(): void {
    this.bulletinService.getBulletin(this.data.bulletinId).subscribe({
      next: (b) => {
        this.bulletin = b;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  getMention(moyenne: number): string {
    if (moyenne >= 16) return 'Très bien';
    if (moyenne >= 14) return 'Bien';
    if (moyenne >= 12) return 'Assez bien';
    if (moyenne >= 10) return 'Passable';
    return 'Insuffisant';
  }

  getMentionClass(moyenne: number): string {
    if (moyenne >= 14) return 'text-green-600 font-semibold';
    if (moyenne >= 10) return 'text-blue-600 font-semibold';
    return 'text-red-600 font-semibold';
  }
}
