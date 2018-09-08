import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Task } from '../models/Task';
import swal from 'sweetalert2';
import { MatButtonModule, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  tasks: any;

  task = {};

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private snacker: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTask(this.route.snapshot.params['id']);
  }

  refreshTaskList() {
    // Retrieve all Tasks
    this.http.get('/tasks').subscribe(data => {
      this.tasks = data as Task[];
    });
  }

  getTask(id) {
    this.http.get('/tasks/' + id).subscribe(data => {
      this.task = data;
    });
  }

  updateTask(id, data) {
    this.http.put('/tasks/' + id, data)
      .subscribe(res => {
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
