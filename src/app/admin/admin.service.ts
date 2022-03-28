import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  getAdminDetailById(id: string) {
    return this.http.get<{ user: any; message: string }>(
      `${this.BACKEND_URL}user/${id}`
    );
  }

  getCoursesAddedByAdminID(id: string) {
    return this.http.get<{ courses: any; message: string }>(
      `${this.BACKEND_URL}course/creator/${id}`
    );
  }

  addNewCourse(form: any) {
    return this.http.post<{ course: any; message: string }>(
      `${this.BACKEND_URL}course/`,
      form
    );
  }
}
