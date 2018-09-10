import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  // initialise tasks list
  tasks: any;

  // initialise Task model
  task: Task;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private taskService: TaskService,
    private snacker: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTask(this.route.snapshot.params['id']);
    this.task = new Task();
  }

  refreshTaskList() {
    this.taskService.getTaskList()
      .subscribe(data => {
        this.tasks = data as Task[];
      }
    );
  }

  getTask(taskId) {
    this.taskService.getTask(taskId)
      .subscribe(data => {
        this.task = data as Task;
        }, (err) => {
          console.log(err);
        }
      );
  }

  updateTask(taskId, task) {
    this.taskService.updateTask(taskId, task)
      .subscribe(data => {
          this.handleUpdate();
        }, (err) => {
          console.log(err);
        }
      );
  }

  handleUpdate() {
    this.refreshTaskList();
    this.router.navigate(['/tasks']);
    swal({
      type: 'success',
      title: 'Task updated',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task updated', 'Success', { duration: 3000 });
  }

  deleteTask(taskId) {
    this.taskService.deleteTask(taskId)
      .subscribe(data => {
        this.handleDelete();
        }, (err) => {
          console.log(err);
        }
      );
  }

  handleDelete() {
    this.refreshTaskList();
    this.router.navigate(['/tasks']);
    swal({
      type: 'success',
      title: 'Task deleted',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task deleted', 'Success', { duration: 3000 });
  }

  goBack() {
    this.location.back();
  }

}
