import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../models/Task';
import swal from 'sweetalert2';
import { MatButtonModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private snacker: MatSnackBar
  ) { }

  // variable to hold the data of the retrieved tasks
  tasks: any;

  // variable to hold the frontend table column names
  cols: any[];

  ngOnInit() {

    // Retrieve Tasks
    this.http.get('/tasks').subscribe(data => {
      this.tasks = data as Task[];
    });

    // Define table column names
    this.cols = [
      { field: 'description', header: 'Description' },
      { field: 'status', header: 'Status' },
    ];
  }

  addTask() {
    this.router.navigate(['/task-create']);
  }

  editTask(taskId, task) {
    this.router.navigate(['/task-edit', taskId, task]);
  }

  removeTask(taskId) {
    this.deleteTask(taskId);
  }

  deleteTask(id) {
    this.http.delete('/tasks/' + id)
      .subscribe(res => {
          // let id = res['id'];
          this.router.navigate(['/tasks']);
          this.handleDelete();
        }, (err) => {
          console.log(err);
        }
      );
  }

  handleDelete() {
    swal({
      type: 'success',
      title: 'Task deleted',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task deleted', 'Success', { duration: 3000 });
  }

}
