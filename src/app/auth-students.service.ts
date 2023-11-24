import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentsService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/Students'
  url_2='http://localhost:5000/addcollege'

  getAllStudents():Observable<any>{
    return this.http.get(this.url)
  }

  registerUser(body:any):Observable<any>{
   return this.http.post(this.url,body)
  }

  deleteRegisterStudent(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  updateData(id:number,body:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,body)

  }
  getStudentById(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }

  collegeData(body:any):Observable<any>{
   return this.http.post(`${this.url_2}/register`,body)

  }
}
