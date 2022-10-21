import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LocalStorageService } from 'ngx-webstorage';
import { STATUS } from '@shared/constants/status.constants';
import { NzModalRef } from 'ng-zorro-antd/modal';
import {
  LOCAL_STORAGE,
  SESSION_STORAGE,
} from '@shared/constants/local-session-cookies.constants';
import { IScheduleRequest } from '@shared/models/schedule/scheduleRequest.model';
import CommonUtil from '@shared/utils/common-utils';
import { InstructorService } from '@shared/services/instructor/instructor.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  schedule: any;
  dto: IScheduleRequest = {};
  loading = false;
  role: any;
  id_user: any;

  isVisible = false;
  constructor( private router: Router,
    private modalService: NzModalService,
    private toast: ToastService,
    private scheduleService: ScheduleService,
    private instructorService: InstructorService,
    private localStorage: LocalStorageService,) { }

  ngOnInit(): void {
    this.getTkb();
  }

  getTkb() {

    this.id_user = this.localStorage.retrieve(LOCAL_STORAGE.ID);
    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "id-user: "+ this.id_user);

    this.instructorService.getScheduleInstructor(this.id_user).subscribe(
      (response: any) => {
        this.schedule = response?.body;
        console.log(this.schedule); 
      },
      (error: any) => {
        this.schedule = [];
      }
    );
  }

}
