import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task.module';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task-concluded',
  templateUrl: './list-task-concluded.component.html',
  styleUrls: ['./list-task-concluded.component.scss']
})
export class ListTaskConcludedComponent implements OnInit {

  constructor(private service: TaskService) { }

  @Input() listTasks: any[] = []


  task: ITask = {
    title: '',
    completeDay: undefined,
    isDone: false
  }

  load(){
    location.reload()
  }

  ngOnInit(): void {
    this.service.all().subscribe((tasks: ITask[]) => {
      this.listTasks = tasks
      return this.task.isDone == false
    })
  }

  deleteTask(task: ITask){
    this.service.delete(task.id).subscribe()
    this.load()
  }

  updateTask(task: ITask){
    this.task.isDone = !task.isDone
    this.task.title = task.title
    this.task.completeDay = task.completeDay
    this.service.update(task.id, this.task).subscribe()
    this.load()
  }
}
