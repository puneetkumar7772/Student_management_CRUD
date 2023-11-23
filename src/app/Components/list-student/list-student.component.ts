import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthStudentsService } from 'src/app/auth-students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
constructor(private authstudents:AuthStudentsService,private toastr:ToastrService){}


}
