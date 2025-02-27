import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IResetPasswordUser, ISendMail, IVerifyOtp } from '../../../models/inheritance/auth';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
  endpoint = environment.API_AUTH_KEY;
  constructor(private http : HttpClient) { }

  SendMail(values : ISendMail) : Observable<any> {
    return this.http.post(this.endpoint + "send-mail", values, {
      withCredentials : true,
      headers : {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((error) => {
        console.log(error);
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        else {
          throw new Error("Something went wrong, try again later");
        }
      })
    )
  }

  VerifyOtp(values : IVerifyOtp) : Observable<any> {
    return this.http.post(this.endpoint + "verify-otp", values, {
      withCredentials : true,
      headers : {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((error) => {
        console.log(error);
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        else {
          throw new Error("Something went wrong, try again later");
        }
      })
    )
  }

  ResetPassword(values : IResetPasswordUser) : Observable<any> {
    return this.http.put(this.endpoint + "reset-password", values, {
      withCredentials : true,
      headers : {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((error) => {
        console.log(error);
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        else {
          throw new Error("Something went wrong, try again later");
        }
      })
    );
  }
}
