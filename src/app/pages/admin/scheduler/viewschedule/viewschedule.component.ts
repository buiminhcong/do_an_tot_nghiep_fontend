import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LocalStorageService } from 'ngx-webstorage';
import {
  LOCAL_STORAGE,
  SESSION_STORAGE,
} from '@shared/constants/local-session-cookies.constants';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.scss']
})
export class ViewscheduleComponent implements OnInit {

  schedule: any;
  loading = false;
  role: any;
  constructor( private router: Router,
    private toast: ToastService,
    private modalService: NzModalService,
    private scheduleService: ScheduleService,
    private fb: FormBuilder,
    private localStorage: LocalStorageService,) { }

  ngOnInit(): void {

    
    this.getTkb();
  }

  getTkb() {

    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "role: "+ this.role);

    this.scheduleService.getSchedule(this.loading).subscribe(
      (response: any) => {
        this.schedule = response?.body?.classes;
        console.log(response?.body?.classes);
        console.log(this.schedule);
      },
      (error: any) => {
        this.schedule = [];
      }
    );
  }

}
