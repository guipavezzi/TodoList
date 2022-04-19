import { ITask } from './../../models/task.module';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent{

  taskForm!: FormGroup;
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      date: new FormControl('', [Validators.required])
    })
  }

  get title(){
    return this.taskForm.get('title')
  }

  get date(){
    return this.taskForm.get('date')
  }

  constructor(private service: TaskService) { }


  task: ITask = {
    title: '',
    completeDay: undefined
  }

  load(){
    location.reload()
  }

  addTask(){
    if(this.taskForm.valid){
      this.service.addTask(this.task).subscribe(
        () =>{
          this.load()
        }
      )
    }
  }


}
