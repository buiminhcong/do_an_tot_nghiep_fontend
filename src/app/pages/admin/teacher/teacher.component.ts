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
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  schedule: any = [];
  dto: IScheduleRequest = {};
  loading = false;
  role: any;
  id_user: any;
  kip1: any = [0, 0, 0, 0, 0, 0];
  kip2 = [];
  kip3 = [];
  kip4 = [];
  kip5 = [];
  kip6 = [];
  multi:any[][] = [];
  gio: any =['7:00-8:50', '9:00-11:00', '12:00-13:50', '14:00-15:50', '16:00-17:50', '18:00-1:50'];

  isVisible = false;
  constructor(
    private router: Router,
    private modalService: NzModalService,
    private toast: ToastService,
    private scheduleService: ScheduleService,
    private instructorService: InstructorService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getTkb();
  }

  getTkb() {
    this.id_user = this.localStorage.retrieve(LOCAL_STORAGE.ID);
    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log('id-user: ' + this.id_user);

    this.instructorService.getScheduleInstructor(this.id_user).subscribe(
      (response: any) => {
        this.schedule = response?.body;
        console.log(this.schedule);
        
        for(let i=0; i<6; i++ ){
            this.multi[i] = this.createDay(this.gio[i])
            
        }
        console.log(this.multi);
      },
      (error: any) => {
        this.schedule = [];
      }
    );
  }

  createDay(time: string): any {
    const k: any = [null, null, null, null, null];
    for (let i = 0; i < this.schedule.length; i++) {
      if (this.schedule[i].meetingTime.time === time) {
        if (this.schedule[i].meetingTime.date === 'Mon') {
          k[0] = this.schedule[i];
        }
        if (this.schedule[i].meetingTime.date === 'Tu') {
          k[1] = this.schedule[i];
        }
        
        if (this.schedule[i].meetingTime.date === 'We') {
          k[2] = this.schedule[i];
        }
        if (this.schedule[i].meetingTime.date === 'Th') {
          k[3] = this.schedule[i];
        }
        
        if (this.schedule[i].meetingTime.date === 'Fr') {
          k[4] = this.schedule[i];
        }
        
        // if (this.schedule[i].meetingTime.date === 'St') {
        //   k[5] = this.schedule[i];
        // }
      }
    }
    console.log('array k: ' + k);
    return k;
  }
}
