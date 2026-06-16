import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationLoaderService } from 'src/app/core/navigation/navigation-loader.service';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    RouterLink,
    MatSnackBarModule,
    MatProgressSpinnerModule
]
})
export class LoginComponent {
  // 1. Ajouter la variable ici
  loading = false; 

  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  inputType = 'password';
  visible = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private navLoader: NavigationLoaderService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar
  ) {}

  send() {
    this.loading = true;

    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.navLoader.loadNavigation();
        const role = this.authService.getRole();
        const destination =
          role === 'ENSEIGNANT' ? '/enseignant/mes-affectations' :
          role === 'COMPTABLE'  ? '/finance/paiements' :
          '/dashboards/analytics';
        this.router.navigate([destination]);
        this.snackbar.open('Bienvenue !', 'OK', { duration: 3000 });
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Identifiants incorrects', 'OK', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  toggleVisibility() {
    this.inputType = this.visible ? 'password' : 'text';
    this.visible = !this.visible;
    this.cd.markForCheck();
  }
}
