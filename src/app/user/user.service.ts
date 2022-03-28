import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  userLogin(form: { email: string; password: string }) {
    return this.http.post<{ user: any; message: string }>(
      `${this.BACKEND_URL}user/login`,
      form
    );
  }

  userSignup(form: any) {
    return this.http.post<{ user: any; message: string }>(
      `${this.BACKEND_URL}user/signup`,
      form
    );
  }

  getUserDetailById(id: string) {
    return this.http.get<{ user: any; message: string }>(
      `${this.BACKEND_URL}user/${id}`
    );
  }

  getUserRegistrationDetail(uerId: string) {
    return this.http.get<{ registers: any; message: string }>(
      `${this.BACKEND_URL}register/${uerId}/user`
    );
  }
}
