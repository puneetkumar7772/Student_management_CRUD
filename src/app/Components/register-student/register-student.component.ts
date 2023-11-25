import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStudentsService } from 'src/app/auth-students.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent {
  sellerForm:any=FormGroup;
  formSubmitted = false;

  constructor(private fb:FormBuilder,private authstudent:AuthStudentsService ,private router:Router,private toastr: ToastrService){
    this.sellerForm = this.fb.group({
    Name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    collegeID: ['', Validators.required],
    collegeName: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmedPassword: ['', Validators.required],
  });
}

submitForm(){
  this.formSubmitted = true;
  let body=this.sellerForm.value
  console.log("**************",body)

 if(this.sellerForm.password===this.sellerForm.confirmedPassword){
  this.authstudent.collegeData(body).subscribe((res)=>{
    console.log("111111111",res)
    if(res){
      console.log("user registered")
      this.toastr.success("User Registered Successfully")
      this.router.navigate(['/login'])
    }else{
      this.toastr.error("Registration failed")
      console.log("error")
    }
  })
 }else{
  this.toastr.warning("Password does not matched")
 }

}
}
