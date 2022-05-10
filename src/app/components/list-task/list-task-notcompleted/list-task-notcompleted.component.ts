import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task.module';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task-notcompleted',
  templateUrl: './list-task-notcompleted.component.html',
  styleUrls: ['./list-task-notcompleted.component.scss']
})
export class ListTaskNotcompletedComponent implements OnInit {
  constructor(private service: TaskService) { }

  @Input() listTasks: any[] = []


  task: ITask = {
    title: '',
    completeDay: undefined,
  }

  load(){
    setTimeout(() => {
      location.reload()
    }, 300);

  }

  ngOnInit(): void {
    this.service.all().subscribe((task: ITask[]) => {
      this.listTasks = task
      console.log(task);
    })
  }

  deleteTask(task: ITask){
    this.service.delete(task.id).subscribe()
    this.load()
  }

  updateTask(task: ITask){
    this.task.title = task.title
    this.task.completeDay = task.completeDay
    this.task.isDone = !task.isDone
    this.service.update(task.id, this.task).subscribe()
    this.load()
  }
}
