import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '@shared/shared.module';
import { CreateUpdateCourseComponent } from './courses/create-update-course/create-update-course.component';
import { TkbComponent } from './tkb/tkb.component';
import { RoomComponent } from './room/room.component';
import { CreateUpdateRoomComponent } from './room/create-update-room/create-update-room.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { StatictisRoomComponent } from './statictis-room/statictis-room.component';
import { StatictisInstructorComponent } from './statictis-instructor/statictis-instructor.component';
import { ViewDetailTeacherComponent } from './viewschedule/view-detail-teacher/view-detail-teacher.component';


@NgModule({
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    SharedModule
  ],
  declarations: [CoursesComponent, CreateUpdateCourseComponent, 
    TkbComponent, RoomComponent, CreateUpdateRoomComponent,
     ViewscheduleComponent, StatictisRoomComponent, StatictisInstructorComponent,
     ViewDetailTeacherComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchedulerModule { }
