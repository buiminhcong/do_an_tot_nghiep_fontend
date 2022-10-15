import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateInstructorComponent } from './create-update-instructor.component';

describe('CreateUpdateInstructorComponent', () => {
  let component: CreateUpdateInstructorComponent;
  let fixture: ComponentFixture<CreateUpdateInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
