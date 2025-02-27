import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

}
