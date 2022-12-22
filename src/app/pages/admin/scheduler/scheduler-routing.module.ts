import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { CoursesComponent } from './courses/courses.component';
import { RoomComponent } from './room/room.component';
import { StatictisInstructorComponent } from './statictis-instructor/statictis-instructor.component';
import { StatictisRoomComponent } from './statictis-room/statictis-room.component';
import { TkbComponent } from './tkb/tkb.component';
import { ViewDetailTeacherComponent } from './viewschedule/view-detail-teacher/view-detail-teacher.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';

const routes: Routes = [
  {
    path: ROUTER_UTILS.scheduler.listCourse,
    component: CoursesComponent,
    data: {
      title: 'model.scheduler.listCourse',
    },
  },
  {
    path: ROUTER_UTILS.room1.listRoom,
    component: RoomComponent,
    data: {
      title: 'model.room1.listRoom',
    },
  },
  {
    path: ROUTER_UTILS.scheduler.tkb,
    component: TkbComponent,
    data: {
      title: 'model.scheduler.tkb',
    },
  },
  {
    path: ROUTER_UTILS.scheduler.viewschedule,
    component: ViewscheduleComponent,
    data: {
      title: 'model.scheduler.viewschedule',
    },
  },

  {
    path: ROUTER_UTILS.scheduler.roomstatictis,
    component: StatictisRoomComponent,
    data: {
      title: 'Xem thống kê phòng sử dụng',
    },
  },
  {
    path: ROUTER_UTILS.scheduler.instructorstatictis,
    component: StatictisInstructorComponent,
    data: {
      title: 'Xem thống giảng viên dạy',
    },
  },
  {
    path: ROUTER_UTILS.scheduler.detail + '/:id',
    component: ViewDetailTeacherComponent,
    data: {
      title: 'Lịch dạy giảng viên',
    },
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulerRoutingModule {}

