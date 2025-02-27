import { Injectable } from '@angular/core';
import { ILoginUser } from '../../../models/inheritance/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  async FetchCurrentLoggedInUser() {
    try {
      const response = await {
        user : null,
        isLoggedin : false
      };

      if (!response.isLoggedin) {
        throw new Error("User not logged in");
      }
      
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      else {
        throw new Error("Something went wrong, try again later");
      }
    }
  }

  async LoginUser (values : ILoginUser) {
    try {
      const response = await {
        user : values,
        isLoggedin : true
      };

      return response;
    }
    catch (error : any) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      else {
        throw new Error("Something went wrong, try again later");
      }
    }
  }

  async LogoutUser () {
    try {
      const response = await {
        user : null,
        isLoggedin : false
      };

      if (!response.isLoggedin) {
        throw new Error("User not logged in");
      }
      
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      else {
        throw new Error("Something went wrong, try again later");
      }
    }
  }
}
