import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskNotcompletedComponent } from './list-task-notcompleted.component';

describe('ListTaskNotcompletedComponent', () => {
  let component: ListTaskNotcompletedComponent;
  let fixture: ComponentFixture<ListTaskNotcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaskNotcompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskNotcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
