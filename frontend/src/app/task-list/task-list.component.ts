import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
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
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' },
      { field: 'status', header: 'Status' },
    ];

  }

  addTask() {
    this.router.navigate(['/task-create']);
  }

  //onRowSelect(event) {
  //  const regId = +event.data.id;
  //  let link = null;
  //  link = ['/task-edit', regId];
  //  this.router.navigate(link);
  //}

}
