import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    // public task: Task | null = null;
  private taskId: string | null = null;

  // Pasirinktos uzduoties Task objektas
  @Input() task : Task| null = null;
  @Output() taskDetailsCloseEvent : EventEmitter<boolean> = new EventEmitter();

  constructor(    private _taskService: TaskService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');

    this._taskService.getTask(this.taskId).subscribe((data: any) => {
      this.task = data;
    })

  }
  

  closeTaskDetails() {
    this.taskDetailsCloseEvent.emit(true);
  }

}