import { Component, OnInit } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
student1 : Student = new Student(1,"Raju",30);
student2 : Student = new Student(2,"Rahul",60);
student3 : Student = new Student(3,"Alex",90);

}
