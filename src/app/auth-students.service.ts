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

}
