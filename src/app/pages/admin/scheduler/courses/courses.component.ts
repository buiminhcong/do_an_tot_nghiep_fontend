import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Course, ICourse } from '@shared/models/schedule/course.model';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import CommonUtil from '@shared/utils/common-utils';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CreateUpdateCourseComponent } from './create-update-course/create-update-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  sortBy = '';

  total = 0;
  loading = false;
  isVisible = false;

  isFirstFetch = true;
  course: any;
  courses: ICourse[] = [];

  // form: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private toast: ToastService,
    private modalService: NzModalService,
    private scheduleService: ScheduleService,
    private fb: FormBuilder
  ) {
    this.getAllCourse();
  }

  ngOnInit(): void {
    // this.loadData(this.pageIndex, this.pageSize);
    this.getAllCourse();
  }

  getAllCourse(): void {
    this.scheduleService.getAllCourse(this.loading).subscribe(
      (response: any) => {
        this.courses = response?.body;
        console.log(response?.body?.data);
        console.log(this.courses);
      },
      (error: any) => {
        this.courses = [];
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
      CreateUpdateCourseComponent,
      {
        isUpdate: false,
      },
      '40%'
    );
    const modal: NzModalRef = this.modalService.create(base);
    modal.afterClose.subscribe((result) => {
      if (result && result?.success) {
        this.getAllCourse();
      }
    });
  }

  update(course: any): void {
    const base = CommonUtil.modalBase(
      CreateUpdateCourseComponent,
      {
        isUpdate: true,
        course,
      },
      '40%'
    );
    const modal: NzModalRef = this.modalService.create(base);
    modal.afterClose.subscribe((result) => {
      if (result && result?.success) {
        this.getAllCourse();
      }
    });
}
  delete(course: any): void {
    this.course = course;
    this.isVisible = true;
  }

  onDelete(result: { success: boolean }): void {
    if (result && result?.success) {
      this.scheduleService.delete(this.course.id).subscribe((res) => {
        this.getAllCourse();
        this.toast.success('common.success');
      });
      this.isVisible = false;
    } else {
      this.isVisible = false;
    }
  }
}

  // resetSearch(): void {
  //   // this.form.get('keyword')?.setValue(null);
  //   // // this.formSearchVendor.reset();
  //   // this.searchForm();
  // }

  // searchForm(): void {
  //   this.vendorRequest.keyword = this.form.get('keyword')?.value;
  //   this.pageIndex = PAGINATION.PAGE_DEFAULT;
  //   this.loadData(this.pageIndex, this.pageSize);
  // }
