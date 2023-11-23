import { Component } from '@angular/core';
import { AuthStudentsService } from 'src/app/auth-students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
constructor(private authstudents:AuthStudentsService){}

data:any=[]
ngOnInit(){
  this.getStudentsData()
}
getStudentsData(){
  this.authstudents.getAllStudents().subscribe((res)=>{
    console.log("first",res)
   this.data=res
   console.log("second",this.data)
  })
}
}
