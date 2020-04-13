import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { First3EmployeesComponent } from './first3-employees.component';

describe('First3EmployeesComponent', () => {
  let component: First3EmployeesComponent;
  let fixture: ComponentFixture<First3EmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ First3EmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(First3EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
