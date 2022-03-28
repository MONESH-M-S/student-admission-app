import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<{ courses: any; message: string }>(
      `${this.BACKEND_URL}course/`
    );
  }

  getCourseDetailById(id: string) {
    return this.http.get<{ course: any; message: string }>(
      `${this.BACKEND_URL}course/${id}`
    );
  }

  registerForACourse(form: { userName: string; email: string }) {
    return this.http.post<{ register: any; message: string }>(
      `${this.BACKEND_URL}register/`,
      form
    );
  }

  updateCount(id: string, count: number) {
    return this.http.put<{ course: any; message: string }>(
      `${this.BACKEND_URL}course/count/`,
      { count: count, id: id }
    );
  }

  getUserDetailByEmail(e: string) {
    return this.http.get<{ user: any; message: string }>(
      `${this.BACKEND_URL}user/email/${e}`
    );
  }

  checkUserAlreadyRegistered(email: string, courseId: string) {
    return this.http.post<{ register: any; message: string }>(
      `${this.BACKEND_URL}register/check-registration`,
      { email: email, courseId: courseId }
    );
  }
}
