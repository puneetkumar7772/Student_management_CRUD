import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStudentsService } from './auth-students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'student_management_CRUD';
  addStudentForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private authstudent: AuthStudentsService,
    private toastr: ToastrService
  ) {
    this.addStudentForm = this.fb.group({
      name: ['', [Validators.required]],
      fathername: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      class: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.getStudentsData();
  }

  addStudent() {
    const data = this.addStudentForm.value;
    console.log('first', data);
    this.authstudent.registerUser(data).subscribe((res) => {
      console.log('second', res);
      this.toastr.success('Student Add Successfully');
      this.getStudentsData();
      this.addStudentForm.reset();
    });
  }

  data: any = [];

  getStudentsData() {
    this.authstudent.getAllStudents().subscribe((res) => {
      console.log('first', res);
      this.data = res;
      console.log('second', this.data);
    });
  }

  deleteStudent(id: any) {
    console.log('third', id);
    this.authstudent.deleteRegisterStudent(id).subscribe((res) => {
      console.log('============', res);
      this.toastr.success('Student deleted successfully');
      this.getStudentsData();
    });
  }

  editData(id:any){
  console.log("5263256",id)
  this.authstudent.getStudentById(id).subscribe((res) => {
  this.addStudentForm.patchValue({
    name:res.name,
    fathername:res.fathername,
    email:res.email,
    fees:res.fees,
    class:res.class,
    mobileno:res.mobileno,
    address:res.address
  })
})
  }

  updateData(){
    const body=this.addStudentForm.value
    this.authstudent.updateData(body).subscribe((res)=>{
      console.log("888888",res)
      this.getStudentsData()
    })
  }
}
