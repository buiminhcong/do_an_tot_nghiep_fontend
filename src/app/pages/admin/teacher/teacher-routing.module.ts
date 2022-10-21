import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [

  {
    path: ROUTER_UTILS.instructorSchedule.tkb,
    component: TeacherComponent,
    data: {
      title: 'model.instructor.manager',
    },
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
