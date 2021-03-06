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

  getCourseDetailById(id: string) {
    return this.http.get<{ course: any; message: string }>(
      `${this.BACKEND_URL}course/${id}`
    );
  }

  getRegistrationDetailsByCourseId(id: string) {
    return this.http.get<{ registers: any; message: string }>(
      `${this.BACKEND_URL}register/c/${id}`
    );
  }

  addNewAdmin(form: any) {
    return this.http.post<{ user: any; message: string }>(
      `${this.BACKEND_URL}user/signup`,
      form
    );
  }

  getAllAdmins() {
    return this.http.get<{ admins: any; message: string }>(
      `${this.BACKEND_URL}user/admins`
    );
  }

  getMessage() {
    return this.http.get<{ message: any }>(`${this.BACKEND_URL}contact/`);
  }

  deleteMessage(id: string) {
    return this.http.delete<{ message: any }>(
      `${this.BACKEND_URL}contact/${id}`
    );
  }

  getRegistrationDetailById(id: string) {
    return this.http.get<{ register: any; message: string }>(
      `${this.BACKEND_URL}register/${id}`
    );
  }

  updateRegisterStatus(id: string, email: string, status: string) {
    return this.http.put<{ register: any; message: string }>(
      `${this.BACKEND_URL}register/status`,
      { id: id, status: status, email: email }
    );
  }

  updateCount(id: string, count: number) {
    return this.http.put<{ course: any; message: string }>(
      `${this.BACKEND_URL}course/count/`,
      { count: count, id: id }
    );
  }
}
