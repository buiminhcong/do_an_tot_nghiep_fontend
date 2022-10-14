import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { CoursesComponent } from './courses/courses.component';
import { RoomComponent } from './room/room.component';
import { TkbComponent } from './tkb/tkb.component';

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
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulerRoutingModule {}

