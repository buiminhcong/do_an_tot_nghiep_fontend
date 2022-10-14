import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ManagerModuleRoutingModule } from './manager-module-routing.module';
import { CreateUpdateModuleComponent } from './module/create-update-module/create-update-module.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerModuleRoutingModule,
    SharedModule
  ],
  declarations: [
    ModuleComponent, CreateUpdateModuleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerModuleModule { }
