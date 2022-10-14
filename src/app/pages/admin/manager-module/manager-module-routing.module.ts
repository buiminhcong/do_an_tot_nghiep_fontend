import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@shared/utils/router.utils';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [

  {
    path: ROUTER_UTILS.module.listModule,
    component: ModuleComponent,
    data: {
      title: 'model.module.manager',
    },
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerModuleRoutingModule { }
