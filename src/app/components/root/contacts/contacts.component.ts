import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
