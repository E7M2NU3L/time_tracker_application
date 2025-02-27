import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IRegisterUser } from '../../../models/inheritance/auth';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  endpoint = environment.API_AUTH_KEY;
  constructor(private http : HttpClient) { }

  RegisterUser(values : IRegisterUser) : Observable<any> {
    return this.http.post<any>(this.endpoint + "register", values, {
      headers : {
        'Content-Type' : 'application/json'
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
