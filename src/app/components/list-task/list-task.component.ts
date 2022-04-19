import { ITask } from './../../models/task.module';
import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  constructor(private service: TaskService) { }

  ngOnInit(): void {

  }
}
