import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailTeacherComponent } from './view-detail-teacher.component';

describe('ViewDetailTeacherComponent', () => {
  let component: ViewDetailTeacherComponent;
  let fixture: ComponentFixture<ViewDetailTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
