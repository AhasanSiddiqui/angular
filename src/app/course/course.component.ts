import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <div (click) = "onDivClick()"> 
    <button (click)="onSave($event)" >Save</button>
  </div>
            `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isActive = false; 
  cources = ["course1","course2","course3","course4","course5"];
  constructor() { }

  ngOnInit() {
  }

  onSave($event) {
    console.log("Button Was Clicked",$event);
  }

  onDivClick() {
    console.log("Div  Was Clicked");
  }

}
