import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    // we are subscribing to the tasks observable from the service so we can watch it
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
