import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStudentsService } from 'src/app/auth-students.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {
  adminLoginForm:any=FormGroup;
  formSubmitted = false;

constructor(private fb:FormBuilder,private authstudent:AuthStudentsService, private router:Router,private toastr:ToastrService){
  this.adminLoginForm=this.fb.group({
    collegeID:['',Validators.required],
    password:['',Validators.required]
  })
}

adminLogin(){
  this.formSubmitted = true;
  let body=this.adminLoginForm.value
  console.log("second",body);
  this.authstudent.Adminlogin(body).subscribe((res)=>{
    console.log("second",res)
    if(res){
      console.log("Admin login")
      this.toastr.success("Admin Login successfully")
      this.router.navigate(['/add'])
    }else{
      this.toastr.warning("Admin not found")
      console.log("Admin not found")
      alert('Admin  not found')
    }
  })
}
}
