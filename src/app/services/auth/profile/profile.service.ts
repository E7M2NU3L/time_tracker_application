import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { IUpdateUser } from '../../../models/inheritance/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  endpoint = environment.API_AUTH_KEY;
  constructor(private http : HttpClient) {}

  FetchCurrentLoggedInUser() : Observable<any> {
    return this.http.get<any>(this.endpoint + "profile", {
      headers : {
        'Content-Type': 'application/json'
      },
      withCredentials : true
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

  UpdateUser(values : IUpdateUser) : Observable<any> {
    return this.http.put<any>(this.endpoint + "profile", values, {
      headers : {
        'Content-Type': 'application/json'
      },
      withCredentials : true
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
