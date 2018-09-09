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

  task: any = {};

  displayDialog: boolean;

  // statusVal: String = 'TODO';

  selectedTask: Task;

  ngOnInit() {

    this.refreshTaskList();

    // Define table column names
    this.cols = [
      { field: '', header: 'Do Task' },
      { field: 'description', header: 'Description' },
      { field: 'status', header: 'Status' },
      { field: '', header: 'Edit Task' },
      { field: '', header: 'Delete Task' },
    ];
  }

  refreshTaskList() {
    // Retrieve all Tasks
    this.http.get('/tasks').subscribe(data => {
      this.tasks = data as Task[];
    });
  }

  showAddDialog() {
    this.displayDialog = true;
    this.task = new Task();
  }

  addTask(task) {

    // Add default value for status
    // task.status = this.statusVal;

    this.http.post('/tasks/add', task)
      .subscribe(res => {
        this.displayDialog = false;
        this.handleAdd();
      }, (err) => {
        console.log(err);
      }
    );
  }

  handleAdd() {
    this.refreshTaskList();
    swal({
      type: 'success',
      title: 'Task added',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task added', 'Success', { duration: 3000 });
  }

  editTask(taskId, task) {
    this.router.navigate(['/task-edit', taskId, task]);
  }

  deleteTask(id) {
    this.http.delete('/tasks/' + id)
      .subscribe(res => {
          this.handleDelete();
        }, (err) => {
          console.log(err);
        }
      );
  }

  handleDelete() {
    this.refreshTaskList();
    swal({
      type: 'success',
      title: 'Task deleted',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task deleted', 'Success', { duration: 3000 });
  }

  deleteAllTasks() {
    this.http.delete('/tasks/delete')
    .subscribe(res => {
        this.handleDeleteAll();
      }, (err) => {
        console.log(err);
      }
    );
  }

  handleDeleteAll() {
    this.refreshTaskList();
    swal({
      type: 'success',
      title: 'All Tasks deleted',
      confirmButtonText: 'OK'
    });
    this.snacker.open('All Tasks deleted', 'Success', { duration: 3000 });
  }

  completeTask(id, task) {
    this.http.put('/tasks/complete/' + id, task)
      .subscribe(res => {
          this.handleCompleteTask();
        }, (err) => {
          console.log(err);
        }
      );
  }

  handleCompleteTask() {
    this.refreshTaskList();
    swal({
      type: 'success',
      title: 'Task completed',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task completed', 'Success', { duration: 3000 });
  }

}
