import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TeacherRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeacherModule { }
