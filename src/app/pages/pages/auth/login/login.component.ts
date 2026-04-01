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
    MatSnackBarModule
  ]
})
export class LoginComponent {
  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  inputType = 'password';
  visible = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar
  ) {}


  // send() {
  //   // Redirection vers le dashboard après login
  //   this.router.navigate(['/dashboards/analytics']);

  //   this.snackbar.open(
  //     "Connexion réussie ! Redirection vers le dashboard...",
  //     'OK',
  //     {
  //       duration: 5000
  //     }
  //   );
  // }

  

  send() {
  this.authService.login(this.form.value).subscribe({
    next: () => {
      this.router.navigate(['/dashboards/analytics']);
      this.snackbar.open("Bienvenue !", 'OK', { duration: 3000 });
    },
    error: (err) => {
      this.snackbar.open("Erreur de connexion", 'OK', { duration: 3000 });
    }
  });
}
  toggleVisibility() {
    this.inputType = this.visible ? 'password' : 'text';
    this.visible = !this.visible;
    this.cd.markForCheck();
  }
}
