import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STATUS } from '@shared/constants/status.constants';
import { ToastService } from '@shared/services/helpers/toast.service';
import { ModuleService } from '@shared/services/module/module.service';
import CommonUtil from '@shared/utils/common-utils';
import { Http2ServerResponse } from 'http2';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-update-module',
  templateUrl: './create-update-module.component.html',
  styleUrls: ['./create-update-module.component.scss']
})
export class CreateUpdateModuleComponent implements OnInit {

 @Input() isUpdate = false;
  form: FormGroup = new FormGroup({});
  @Input() module: any;
  subjects: any;

  constructor( private fb: FormBuilder,
    private modalRef: NzModalRef,
    private toast: ToastService,
    private moduleService: ModuleService,
) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllSubject();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [
       this.isUpdate ? this.module?.name : null,
        [Validators.required],
      ],
      moduleCode: [
        this.isUpdate ? this.module?.moduleCode : null,
         [Validators.required],
       ],
       credits: [
        this.isUpdate ? this.module?.credits : '',
        [Validators.required],
      ],
      id_subject: [
        this.isUpdate ? this.module?.subject.id : '',
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
      this.updateModule();
    } else {
      this.createModule();
    }
  }

  private updateModule(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const module: any = {
      ...this.form.value,
    };
    if (this.module?.id) {
      this.moduleService.update(this.module.id, module).subscribe((res) => {
        if (res.status === STATUS.SUCCESS_200) {
          this.toast.success('common.success');
          this.modalRef.close({
            success: true,
            value: module,
          });
        }
      },
      (err:Http2ServerResponse) => {
        console.log('Loi ' + err)
        this.toast.error('Đã có mã môn học, vui lòng xem lại');
        this.modalRef.close({
          success: true,
          value: module,
        });
     }
      );
    }
  }

  private createModule(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const module: any = {
      ...this.form.value,
    };

    this.moduleService.create(module).subscribe((res) => {
      if (res.status === STATUS.SUCCESS_200) {
        this.toast.success('common.success');
        this.modalRef.close({
          success: true,
          value: module,
        });
      }
    },
    (err:Http2ServerResponse) => {
      console.log('Loi ' + err)
      this.toast.error('Đã có mã môn học, vui lòng xem lại');
      this.modalRef.close({
        success: true,
        value: module,
      });
   }
    );
  }


  getAllSubject(): void {
    this.moduleService.getAllSubject().subscribe(
      (response: any) => {
        this.subjects = response?.body;
        console.log(this.subjects);
      },
      (error: any) => {
        this.subjects = [];
      }
    );
  }

}
