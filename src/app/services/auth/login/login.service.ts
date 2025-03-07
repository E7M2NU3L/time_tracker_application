import { Injectable } from '@angular/core';
import { ILoginUser } from '../../../models/inheritance/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint = environment.API_AUTH_KEY;
  constructor(private http : HttpClient) {}

  LoginUser (values : ILoginUser) : Observable<any> {
    return this.http.post<any>(this.endpoint + "login", values, {
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

  LogoutUser () : Observable<any> {
    return this.http.post<any>(this.endpoint + "logout", {}, {
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
}
