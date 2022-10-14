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
import { CreateUpdateModuleComponent } from './create-update-module/create-update-module.component';
@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})

export class ModuleComponent implements OnInit {

  sortBy = '';

  total = 0;
  loading = false;
  isVisible = false;
  role: any;
  isFirstFetch = true;
  module: any;
  modules: IModuleRequest[] = [];

  // form: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private toast: ToastService,
    private modalService: NzModalService,
    private moduleService: ModuleService,
    private fb: FormBuilder,
    private localStorage: LocalStorageService,

  ) {
    this.getAllModule();
  }

  ngOnInit(): void {
    // this.loadData(this.pageIndex, this.pageSize);
    this.getAllModule();
  }


  getAllModule(): void {

    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "role: "+ this.role);
    
    
    this.moduleService.getAllModule(this.loading).subscribe(
      (response: any) => {
        this.modules = response?.body;
        console.log(response?.body?.data);
        console.log(this.modules);
      },
      (error: any) => {
        this.modules = [];
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
      CreateUpdateModuleComponent,
      {
        isUpdate: false,
      },
      '50%'
    );
    const modal: NzModalRef = this.modalService.create(base);
    modal.afterClose.subscribe((result) => {
      if (result && result?.success) {
        this.getAllModule();
      }
    });
  }

  update(module: any): void {
    const base = CommonUtil.modalBase(
      CreateUpdateModuleComponent,
      {
        isUpdate: true,
        module,
      },
      '50%'
    );
    const modal: NzModalRef = this.modalService.create(base);
    modal.afterClose.subscribe((result) => {
      if (result && result?.success) {
        this.getAllModule();
      }
    });
}
  delete(module: any): void {
    this.module = module;
    this.isVisible = true;
  }

  onDelete(result: { success: boolean }): void {
    if (result && result?.success) {
      this.moduleService.delete(this.module.id).subscribe((res) => {
        this.getAllModule();
        this.toast.success('common.success');
      });
      this.isVisible = false;
    } else {
      this.isVisible = false;
    }
  }

}
