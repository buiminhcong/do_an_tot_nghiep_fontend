import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STATUS } from '@shared/constants/status.constants';
import { ITeacherRequest, TeacherRequest } from '@shared/models/teacher/teacherRequest.model';
import { ToastService } from '@shared/services/helpers/toast.service';
import { InstructorService } from '@shared/services/instructor/instructor.service';
import { ModuleService } from '@shared/services/module/module.service';
import CommonUtil from '@shared/utils/common-utils';
import { Http2ServerResponse } from 'http2';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-update-instructor',
  templateUrl: './create-update-instructor.component.html',
  styleUrls: ['./create-update-instructor.component.scss']
})
export class CreateUpdateInstructorComponent implements OnInit {

  @Input() isUpdate = false;
  form: FormGroup = new FormGroup({});
  @Input()
  teacherRequest: TeacherRequest = {
  };
  id_sb: any;
  subjects: any;
  instructor: any;
  

  constructor( private fb: FormBuilder,
    private modalRef: NzModalRef,
    private toast: ToastService,
    private instructorService: InstructorService,
) {

 }

  ngOnInit(): void {
  
   this.teacherRequest = {
    id: this.instructor.id,
    code: this.instructor.code,
    subject: this.instructor.subject,
    username: this.instructor.user.userName,
    password: this.instructor.user.password,
    firstName: this.instructor.user.name.firstName,
    lastName: this.instructor.user.name.lastName,
    middleName: this.instructor.user.name.middleName,
    phone: this.instructor.user.address.phone,
    email: this.instructor.user.address.email,
    city: this.instructor.user.address.city
   }

   console.log(this.teacherRequest);
   
    this.initForm();
    this.getAllSubject();
  }

  initForm(): void {

    console.log(this.teacherRequest);
    

    this.form = this.fb.group({
      code: [
       this.isUpdate ? this.teacherRequest?.code :null,
        [Validators.required],
      ],
      username: [
        this.isUpdate ? this.teacherRequest?.username : null,
         [Validators.required],
       ],
       password: [
        this.isUpdate ? this.teacherRequest?.password : null,
         [Validators.required],
       ],
       firstName: [
        this.isUpdate ? this.teacherRequest?.firstName : null,
         [Validators.required],
       ],
       lastName: [
        this.isUpdate ? this.teacherRequest?.lastName : null,
         [Validators.required],
       ],
       middleName: [
        this.isUpdate ? this.teacherRequest?.middleName : null,
         [Validators.required],
       ],
       phone: [
        this.isUpdate ? this.teacherRequest?.phone : null,
         [Validators.required],
       ],
       email: [
        this.isUpdate ? this.teacherRequest?.email : null,
         [Validators.required],
       ],
       city: [
        this.isUpdate ? this.teacherRequest?.city : null,
         [Validators.required],
       ],
      id_subject: [
        this.isUpdate ? this.teacherRequest?.subject?.id : '',
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
      this.updateInstructor();
    } else {
      this.createInstructor();
    }
  }

  private updateInstructor(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const teacherRequest1: any = {
      ...this.form.value,
    };

    this.id_sb = this.teacherRequest.id;
    console.log(this.id_sb);
    console.log("teacher id: " + this.teacherRequest?.id);
    
    if (this.teacherRequest?.id) {
      this.instructorService.update(this.id_sb, teacherRequest1).subscribe((res) => {
        if (res.status === STATUS.SUCCESS_200) {
          this.toast.success('common.success');
          this.modalRef.close({
            success: true,
            value: teacherRequest1,
          });
        }
      },
      (err:Http2ServerResponse) => {
        console.log('Lỗi ' + err)
        this.toast.error('Trùng mã môn học hoặc trùng username');
        this.modalRef.close({
          success: true,
          value: module,
        });
     }
      );
    }
  }

  private createInstructor(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const teacherRequest: any = {
      ...this.form.value,
    };

    this.instructorService.create(teacherRequest).subscribe((res) => {
      if (res.status === STATUS.SUCCESS_200) {
        this.toast.success('common.success');
        this.modalRef.close({
          success: true,
          value: teacherRequest,
        });
      }
    },
    (err:Http2ServerResponse) => {
      console.log('Lỗi ' + err)
      this.toast.error('Trùng mã môn học hoặc trung username');
      this.modalRef.close({
        success: true,
        value: teacherRequest,
      });
   }
    );
  }


  getAllSubject(): void {
    this.instructorService.getAllSubject().subscribe(
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
