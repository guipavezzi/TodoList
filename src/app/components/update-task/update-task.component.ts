import { TaskService } from './../../services/task.service';
import { HttpClient } from '@angular/common/http';
import { ITask } from './../../models/task.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private service: TaskService, private router: Router, private activateRouter: ActivatedRoute) { }

  task: ITask = {
    title: '',
    completeDay: undefined,
  }

  ngOnInit(): void {
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'))
    this.service.taskById(id).subscribe(
      retorno => {
        this.task = retorno
      }
    )
  }

  updateTask(task: ITask){
    this.task.title = task.title
    this.task.completeDay = task.completeDay
    this.service.update(task.id, this.task).subscribe(
      (retorno) => {
        this.router.navigate(['/'])
      }
    )

  }

}
