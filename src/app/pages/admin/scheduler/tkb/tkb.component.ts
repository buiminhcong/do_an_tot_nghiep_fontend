import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-tkb',
  templateUrl: './tkb.component.html',
  styleUrls: ['./tkb.component.scss']
})
export class TkbComponent implements OnInit {
  schedule: any;
  loading = false;
  constructor( private router: Router,
    private toast: ToastService,
    private modalService: NzModalService,
    private scheduleService: ScheduleService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getTkb();
  }

  getTkb() {
    this.scheduleService.getTkb(this.loading).subscribe(
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
