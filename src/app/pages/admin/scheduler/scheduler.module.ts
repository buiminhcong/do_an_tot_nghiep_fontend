import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '@shared/shared.module';
import { CreateUpdateCourseComponent } from './courses/create-update-course/create-update-course.component';
import { TkbComponent } from './tkb/tkb.component';

@NgModule({
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    SharedModule
  ],
  declarations: [CoursesComponent, CreateUpdateCourseComponent, TkbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchedulerModule { }
