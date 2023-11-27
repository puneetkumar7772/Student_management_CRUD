import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthStudentsService } from 'src/app/auth-students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  addQuestionForm: any = FormGroup;
constructor(private fb:FormBuilder, private authstudents:AuthStudentsService,private toastr:ToastrService){

this.addQuestionForm = this.fb.group({
  id:[''],
  Question: ['', [Validators.required]],
  option1: ['', [Validators.required]],
  option2: ['', [Validators.required]],
  option3: ['', [Validators.required]],
  option4: ['', [Validators.required]],
  answer: ['', [Validators.required]],
});
}

addQuestion(){
  const body=this.addQuestionForm.value
  console.log("11111111111",body)
  this.addQuestionForm.reset()
}

}
