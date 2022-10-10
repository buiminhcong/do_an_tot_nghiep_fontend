import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { CoursesComponent } from './courses/courses.component';
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
    path: ROUTER_UTILS.scheduler.tkb,
    component: TkbComponent,
    data: {
      title: 'model.scheduler.tkb',
    },
  }
  // {
  //   path: ROUTER_UTILS.product.category,
  //   component: CategoryComponent,
  //   data: {
  //     title: 'model.category.list',
  //   },
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulerRoutingModule {}

