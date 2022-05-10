import { ITask } from './../models/task.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = "http://localhost:5000/task"


  constructor(private HttpClient: HttpClient) {
  }

   all(): Observable<ITask[]>{
     return this.HttpClient.get<ITask[]>(this.URL)
   }

   taskById(id: number | undefined): Observable<ITask>{
    return this.HttpClient.get<ITask>(`${this.URL}/${id}`).pipe()
   }

   addTask(task: ITask): Observable<ITask>{
      return this.HttpClient.post<ITask>(this.URL, task).pipe()
   }

   update(id: number | undefined, task: ITask): Observable<ITask>{
    return this.HttpClient.put<ITask>(`${this.URL}/${id}`, task).pipe()
   }

   delete(id: number | undefined): Observable<any>{
    return this.HttpClient.delete<any>(`${this.URL}/${id}`).pipe()
   }
}
