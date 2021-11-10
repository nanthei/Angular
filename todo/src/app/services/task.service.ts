import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // API Adresas is kur gausime duomenis
  private apiUrl: string = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    let uri = this.apiUrl;
    return this.http.get<Task[]>(uri);
  }

  toggleTask(task: Task) {
    // Budas 1 aprasyti kreipimasi i url
    let uri = this.apiUrl + '/' + task.id;
    // Budas 2 aprasyti kreipimasi i url *string sujungimas
    // uri = `${this.apiUrl}/${task.id}`;

    // Body objektas, apibrezti kokius laukelius gali atnaujinti si funkcija
    let body = { completed: task.completed };

    // Issiunciama uzklausa duomenu atnaujinimui
    // Daugiau pasiskaitymui apie http metodus angluar: https://blog.angular-university.io/angular-http/
    return this.http.patch(uri, body);

    // Pvz atnaujinti visus duomenis is objekto
    // return this.http.patch(uri, task);
  }

  createTask(task: Task) {
    let uri = this.apiUrl + '/' + task.id;
    //  uri =`${this.apiUrl}/${task.id}`;
    return this.http.patch(uri, task);
  }

  updateTask(task: Task) {
    let uri = this.apiUrl + '/' + task.id;
    //  uri =`${this.apiUrl}/${task.id}`;
    return this.http.put(uri, task);
  }

  deleteTask(task: Task) {
    let uri = this.apiUrl + '/' + task.id;
    //  uri =`${this.apiUrl}/${task.id}`;
    return this.http.delete(uri);
  }
}
