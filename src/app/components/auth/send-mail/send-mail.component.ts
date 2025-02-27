import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-send-mail',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './send-mail.component.html',
  styleUrl: './send-mail.component.css'
})
export class SendMailComponent {

}
