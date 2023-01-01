import { Component } from '@angular/core';

// created with ng create component components/header

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  // why didnt it generate with a constructor and ngOnInit
  constructor() {}

  // this is a lifecycle method - stuff here for when component initially loads
  ngOnInit(): void {

  }

  toggleAddTask() {
    console.log("toggle")
  }
}
