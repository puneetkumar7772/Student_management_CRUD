import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentsService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/Students'

  getAllStudents():Observable<any>{
    return this.http.get(this.url)
  }

  registerUser(body:any):Observable<any>{
   return this.http.post(this.url,body)
  }

  deleteRegisterStudent(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  updateData(body:any):Observable<any>{
    return this.http.put(this.url,body)

  }
  getStudentById(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
}
