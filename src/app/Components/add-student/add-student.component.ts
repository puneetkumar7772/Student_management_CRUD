import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthStudentsService } from 'src/app/auth-students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  addStudentForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private authstudent: AuthStudentsService,
    private toastr: ToastrService
  ) {
    this.addStudentForm = this.fb.group({
      id:[''],
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
    address:res.address,
    id:res.id
  })
})
  }

  updateData(){
    const body=this.addStudentForm.value
    console.log("8888888888",body.id)
    this.authstudent.updateData(body.id,body).subscribe((res)=>{
      console.log("888888",res)
      this.getStudentsData()
    })
  }
  resetForm() {
    this.addStudentForm.reset();
  }



}
