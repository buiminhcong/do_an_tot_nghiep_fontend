import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictisInstructorComponent } from './statictis-instructor.component';

describe('StatictisInstructorComponent', () => {
  let component: StatictisInstructorComponent;
  let fixture: ComponentFixture<StatictisInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatictisInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatictisInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
