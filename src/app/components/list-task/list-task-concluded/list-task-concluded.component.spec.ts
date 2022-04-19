import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskConcludedComponent } from './list-task-concluded.component';

describe('ListTaskConcludedComponent', () => {
  let component: ListTaskConcludedComponent;
  let fixture: ComponentFixture<ListTaskConcludedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaskConcludedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskConcludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
