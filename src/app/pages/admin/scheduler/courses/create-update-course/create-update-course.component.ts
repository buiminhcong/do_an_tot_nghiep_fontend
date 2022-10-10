import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STATUS } from '@shared/constants/status.constants';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import CommonUtil from '@shared/utils/common-utils';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-update-course',
  templateUrl: './create-update-course.component.html',
  styleUrls: ['./create-update-course.component.scss']
})
export class CreateUpdateCourseComponent implements OnInit {
  @Input() isUpdate = false;
  form: FormGroup = new FormGroup({});
  @Input() course: any;
  modules: any;

  constructor( private fb: FormBuilder,
    private modalRef: NzModalRef,
    private toast: ToastService,
    private scheduleService: ScheduleService,
) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllModule();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [
       this.isUpdate ? this.course?.name : null,
        [Validators.required],
      ],
      maxNumbOfStudents: [
        this.isUpdate ? this.course?.maxNumbOfStudents : '',
        [Validators.required],
      ],
      module_id: [
        this.isUpdate ? this.course?.module.id : '',
        [Validators.required],
      ],
    });
  }

  onCancel(): void {
    this.modalRef.close({
      success: false,
      value: null,
    });
  }

  onSubmit(): void {
    if (this.isUpdate) {
      this.updateCourse();
    } else {
      this.createCourse();
    }
  }

  private updateCourse(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const course: any = {
      ...this.form.value,
    };
    if (this.course?.id) {
      this.scheduleService.update(this.course.id, course).subscribe((res) => {
        if (res.status === STATUS.SUCCESS_200) {
          this.toast.success('common.success');
          this.modalRef.close({
            success: true,
            value: course,
          });
        }
      });
    }
  }

  private createCourse(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const course: any = {
      ...this.form.value,
    };

    this.scheduleService.create(course).subscribe((res) => {
      if (res.status === STATUS.SUCCESS_200) {
        this.toast.success('common.success');
        this.modalRef.close({
          success: true,
          value: course,
        });
      }
    });
  }


  getAllModule(): void {
    this.scheduleService.getAllModule().subscribe(
      (response: any) => {
        this.modules = response?.body;
        console.log(this.modules);
      },
      (error: any) => {
        this.modules = [];
      }
    );
  }
}
