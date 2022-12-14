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


@Component({
  selector: 'app-tkb',
  templateUrl: './tkb.component.html',
  styleUrls: ['./tkb.component.scss']
})
export class TkbComponent implements OnInit {
  schedule: any;
  dto: IScheduleRequest = {};
  loading = false;
  role: any;
  isVisible = false;
  constructor( private router: Router,
    private modalService: NzModalService,
    private toast: ToastService,
    private scheduleService: ScheduleService,
    private localStorage: LocalStorageService,) { }

  ngOnInit(): void {
    this.getTkb();
  }

  getTkb() {

    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "role: "+ this.role);

    this.scheduleService.getTkb(this.loading).subscribe(
      (response: any) => {
        this.schedule = response?.body?.classes;
        console.log(response?.body?.classes);
        console.log(this.schedule);
        this.dto = {
          classes: response?.body?.classes,
        }
        console.log('dto: ' + this.dto.classes);
        
      },
      (error: any) => {
        this.schedule = [];
      }
    );
  }

  delete(): void {
    this.isVisible = true;
  }

  savetkb(result: { success: boolean }){
    if (result && result?.success) {
      this.scheduleService.createSchedule(this.schedule).subscribe((res) => {
        this.toast.success('L??u th??nh c??ng th???i kh??a bi???u');
      });
      this.isVisible = false;
    } else {
      this.isVisible = false;
    }
  }

}
