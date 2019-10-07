import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Student } from './Student';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})

export class SinhvienComponent implements OnInit {
  students: Student[]=[
    {
      id: 1,
      fullname: "Nguyễn Văn Tèo",
      birthday: new Date(2019,6,30),
      mark: 4
    },
    {
      id: 2,
      fullname: "Phan thị nỏ",
      birthday: new Date(2019,6,30),
      mark: 9
    }
  ];
  formstudent={
    id: 0,
    fullname: '',
    birthday: new Date().toISOString().substring(0,10),
    mark: 0
  }
  edit= false;
  AddStudent(){
    this.formstudent.id=this.students.length+1;
    this.students.push(Object.assign(this.formstudent));
    // Reset Form
    this.formstudent={
      id: 0,
      fullname: '',
      birthday: new Date().toISOString().substring(0,10),
      mark: 0
    }
  }
  UpdateStudent(id){
    let index=this.students.indexOf(this.students.find(sv => sv.id==id))
    this.students[index]=Object.assign(this.formstudent);
    this.edit =! this.edit;
  }
  DeleteStudent(item: Student){
    for(var i=0; i<this.students.length; i++){
      if(this.students[i].id == item.id){
        this.students.splice(i,1);
      }
    }
  }
  DeleteAllStudent(){
    this.students=null;
  }
  CancerEdit(){
    this.edit=false;
    // Reset Form
    this.formstudent={
      id: 0,
      fullname: '',
      birthday: new Date().toISOString().substring(0,10),
      mark: 0
    }
  }
  EditStudent(student: Student){
    this.edit=!this.edit;

    this.formstudent={
      id: student.id,
      fullname: student.fullname,
      birthday: new Date(student.birthday).toString().substring(0,10),
      mark: student.mark
    }
  }
  gradeStudent(item: Student){
    if(item.mark>=0 && item.mark<=5){
      return "Trung bình";
    }else{
      if(item.mark>5 && item.mark<=8){
        return "Khá";
      }else{
        return "Giỏi"
      }
    }
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
