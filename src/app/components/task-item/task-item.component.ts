import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  // allowing unitialised variable here to get around TS
  @Input() task!: Task;
  faTimes = faTimes;

  constructor() {
    // this.task = Task;
    // this.task: Task[] = TASKS;
  }

  ngOnInit(): void {}
}
