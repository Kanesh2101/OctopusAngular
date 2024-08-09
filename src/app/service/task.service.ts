import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url = 'https://localhost:7150/api/Task';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.url);
  }

  addTasks(task: Task) {
    return this.http.post(this.url, task);
  }

  updateTask(task: Task) {
    return this.http.put(this.url, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(this.url + '/' + taskId);
  }
}
