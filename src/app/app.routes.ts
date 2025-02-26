import { Routes } from '@angular/router';
import { HomeComponent } from './components/root/home/home.component';
import { PricingComponent } from './components/root/pricing/pricing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SendMailComponent } from './components/auth/send-mail/send-mail.component';
import { VerifyOtpComponent } from './components/auth/verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ContactsComponent } from './components/root/contacts/contacts.component';
import { FaqsComponent } from './components/root/faqs/faqs.component';
import { TestimonialsComponent } from './components/root/testimonials/testimonials.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "pricing",
        component : PricingComponent
    },
    {
        path : "contact",
        component : ContactsComponent
    },
    {
        path : "faqs",
        component : FaqsComponent
    },
    {
        path : "testimonials",
        component : TestimonialsComponent
    },
    {
        path : "sign-in",
        component : LoginComponent
    },
    {
        path : "sign-up",
        component : RegisterComponent
    },
    {
        path : "send-mail",
        component : SendMailComponent
    },
    {
        path : "verify-otp",
        component : VerifyOtpComponent
    },
    {
        path : "reset-password",
        component : ResetPasswordComponent
    }
];
