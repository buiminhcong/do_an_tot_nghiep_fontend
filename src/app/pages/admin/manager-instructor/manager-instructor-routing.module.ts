import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { InstructorComponent } from './instructor/instructor.component';

const routes: Routes = [
  {
    path: ROUTER_UTILS.instructor.listInstructor,
    component: InstructorComponent,
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
export class ManagerInstructorRoutingModule { }
