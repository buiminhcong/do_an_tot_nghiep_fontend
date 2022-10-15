import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ManagerInstructorRoutingModule } from './manager-instructor-routing.module';
import { InstructorComponent } from './instructor/instructor.component';
import { CreateUpdateInstructorComponent } from './instructor/create-update-instructor/create-update-instructor.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    InstructorComponent,
     CreateUpdateInstructorComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ManagerInstructorRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerInstructorModule { }
