import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faqs',
  imports: [FooterComponent, NavbarComponent, RouterLink],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  Toggle () {
    document.querySelectorAll('.toggle-faq').forEach((button : Element) => {
      button.addEventListener('click', () => {
        const content : Element | null = button.nextElementSibling;
        const icon : Element | null = button.querySelector('.faq-icon');
        
        if (content && icon) {
          content.classList.toggle('hidden');
          icon.classList.toggle('rotate-180');
        }
      });
    });
  }
}
