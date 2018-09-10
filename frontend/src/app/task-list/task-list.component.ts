import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
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
    private taskService: TaskService,
    private snacker: MatSnackBar
  ) { }

  tasks: any;

  // variable to hold the frontend table column names
  cols: any[];

  task: any = {};

  displayDialog: boolean;

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
    this.taskService.getTaskList()
      .subscribe(data => {
        this.tasks = data as Task[];
      }
    );
  }

  showAddDialog() {
    this.displayDialog = true;
    this.task = new Task();
  }

  saveTask(task) {
    this.taskService.addTask(this.task)
        .subscribe(data => {
          this.displayDialog = false;
          this.handleSave();
      }, (err) => {
        console.log(err);
      }
    );
  }

  handleSave() {
    this.refreshTaskList();
    swal({
      type: 'success',
      title: 'Task saved',
      confirmButtonText: 'OK'
    });
    this.snacker.open('Task saved', 'Success', { duration: 3000 });
  }

  editTask(taskId, task) {
    this.displayDialog = true;
    this.task.id = taskId;
    this.task = task;
    // this.router.navigate(['/task-edit', taskId, task]);
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
    swal({
      type: 'warning',
      title: 'Are you sure you want to delete ALL Tasks?',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
        this.taskService.deleteAllTasks()
          .subscribe(data => {
            this.handleDeleteAll();
          }, (err) => {
            console.log(err);
          });
      } else {
        swal({
          type: 'info',
          title: 'Your Tasks are safe',
        });
        this.snacker.open('Your Tasks are safe', 'Info', { duration: 3000 });
      }
    });
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
