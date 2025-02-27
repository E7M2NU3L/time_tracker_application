import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
