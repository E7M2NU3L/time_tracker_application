import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent {

}
