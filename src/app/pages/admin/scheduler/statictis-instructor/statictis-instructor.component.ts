import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Course, ICourse } from '@shared/models/schedule/course.model';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import CommonUtil from '@shared/utils/common-utils';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { LocalStorageService } from 'ngx-webstorage';
import {
  LOCAL_STORAGE,
  SESSION_STORAGE,
} from '@shared/constants/local-session-cookies.constants';
import { IModuleRequest } from '@shared/models/module/moduleRequest.model';
import { ModuleService } from '@shared/services/module/module.service';
import { IInstructor } from '@shared/models/teacher/instructor.model';
import { InstructorService } from '@shared/services/instructor/instructor.service';

@Component({
  selector: 'app-statictis-instructor',
  templateUrl: './statictis-instructor.component.html',
  styleUrls: ['./statictis-instructor.component.scss']
})
export class StatictisInstructorComponent implements OnInit {

  sortBy = '';

  total = 0;
  loading = false;
  isVisible = false;
  role: any;
  isFirstFetch = true;
  instructor: any;
  instructors: IInstructor[] = [];
  teacherReqest: any;

  // form: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private toast: ToastService,
    private modalService: NzModalService,
    private scheduleService: ScheduleService,
    private fb: FormBuilder,
    private localStorage: LocalStorageService,

  ) {
    this.getAllInstructor();
  }

  ngOnInit(): void {
    // this.loadData(this.pageIndex, this.pageSize);
    this.getAllInstructor();
  }


  getAllInstructor(): void {

    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "role: "+ this.role);
    
    
    this.scheduleService.geInstructorStatistic(this.loading).subscribe(
      (response: any) => {
        this.instructors = response?.body;
        console.log(response?.body?.data);
        console.log(this.instructors);
      },
      (error: any) => {
        this.instructors = [];
      }
    );
  }
}
