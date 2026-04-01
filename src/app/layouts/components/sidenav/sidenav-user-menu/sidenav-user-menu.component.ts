import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VexPopoverRef } from '@vex/components/vex-popover/vex-popover-ref';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-sidenav-user-menu',
  templateUrl: './sidenav-user-menu.component.html',
  styleUrls: ['./sidenav-user-menu.component.scss'],
  imports: [MatRippleModule, RouterLink, MatIconModule],
  standalone: true
})
export class SidenavUserMenuComponent implements OnInit {
  constructor(private readonly popoverRef: VexPopoverRef, 
    private cd: ChangeDetectorRef, 
    private authService:AuthService, private router:Router) {}

  ngOnInit(): void {}

  close(): void {
    /** Wait for animation to complete and then close */
    setTimeout(() => this.popoverRef.close(), 250);
  }

  logout(): void {

  Swal.fire({
    title: 'Déconnexion',
    text: "Êtes-vous sûr de vouloir vous déconnecter ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, me déconnecter',
    cancelButtonText: 'Annuler',

    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',

    buttonsStyling: true

  }).then((result) => {

    if (result.isConfirmed) {

      this.authService.logout();

      Swal.fire({
        icon: 'success',
        title: 'Déconnecté',
        text: 'À bientôt',
        timer: 1000,
        showConfirmButton: false
      }).then(() => {
        this.router.navigate(['/login']);
      });

    }

  });

}


}
