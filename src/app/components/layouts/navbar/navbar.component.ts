import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../../services/auth/login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user : any = null;
  isLoggedin : boolean = false;
  error : string | null = null;
  showLogoutModal : boolean = false;

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.FetchCurrentLoggedInUser().then((data) => {
      this.user = data.user;
      this.isLoggedin = data.isLoggedin;
    }).catch((err : any) => {
      if (err instanceof Error) {
        this.error = err.message;
      }
      else {
        this.error = 'An error occurred while fetching user data.';
      }
    })
  };

  showModal () {
    this.showLogoutModal = true;
  }

  closeModal() {
    this.showLogoutModal = false;
  }

  LogoutUser() {
    this.loginService.LogoutUser().then((data) => {
      this.user = data.user;
      this.isLoggedin = data.isLoggedin;
    }).catch((err : any) => {
      if (err instanceof Error) {
        this.error = err.message;
      }
      else {
        this.error = 'An error occurred while logging out.';
      }
    }).finally(() => {
        this.closeModal();
    })
  }
}
