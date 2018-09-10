import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Task } from '../models/task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<Object> {
    return this.http.get('/tasks');
  }

  getTask(taskId: number): Observable<Object> {
    return this.http.get('/tasks/' + taskId);
  }

  addTask(task: Task): Observable<Object> {
    return this.http.post('/tasks/add', task);
  }

  updateTask(taskId: number, task: Task): Observable<Object> {
     return this.http.put('/tasks/' + taskId, task);
  }

  deleteTask(taskId: number): Observable<Object> {
    return this.http.delete('/tasks/' + taskId);
  }

  deleteAllTasks(): Observable<Object> {
    return this.http.delete('/tasks/delete');
  }

}
