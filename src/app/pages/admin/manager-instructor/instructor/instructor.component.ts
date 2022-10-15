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
import { CreateUpdateInstructorComponent } from './create-update-instructor/create-update-instructor.component';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

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
    private instructorService: InstructorService,
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
    
    
    this.instructorService.getAllInstructor(this.loading).subscribe(
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

  // initForm(): void {
  //   this.form = this.fb.group({
  //     keyword: [this.vendorRequest.keyword || null],
  //   });
  // }
  // detail(id: string): void {
  //   this.router.navigate([ROUTER_UTILS.vendor.root, id, ROUTER_ACTIONS.detail]);
  // }

  create(): void {
    const base = CommonUtil.modalBase(
      CreateUpdateInstructorComponent,
      {
        isUpdate: false,
      },
      '70%'
    );
    const modal: NzModalRef = this.modalService.create(base);
    modal.afterClose.subscribe((result) => {
      if (result && result?.success) {
        this.getAllInstructor();
      }
    });
  }

  update(instructor: any): void {
    const base = CommonUtil.modalBase(
      CreateUpdateInstructorComponent,
      {
        isUpdate: true,
        instructor 
      },
      '70%'
    );
    const modal: NzModalRef = this.modalService.create(base);
    modal.afterClose.subscribe((result) => {
      if (result && result?.success) {
        this.getAllInstructor();
      }
    });
}
  delete(instructor: any): void {
    this.instructor = instructor;
    this.isVisible = true;
  }

  onDelete(result: { success: boolean }): void {
    if (result && result?.success) {
      this.instructorService.delete(this.instructor.id).subscribe((res) => {
        this.getAllInstructor();
        this.toast.success('common.success');
      });
      this.isVisible = false;
    } else {
      this.isVisible = false;
    }
  }

}
