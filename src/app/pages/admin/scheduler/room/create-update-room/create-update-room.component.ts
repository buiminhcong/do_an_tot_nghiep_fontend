import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STATUS } from '@shared/constants/status.constants';
import { ToastService } from '@shared/services/helpers/toast.service';
import { RoomService } from '@shared/services/room/room.service';
import { ScheduleService } from '@shared/services/scheduler/schedule.service';
import CommonUtil from '@shared/utils/common-utils';
import { ifError } from 'assert';
import { Http2ServerResponse } from 'http2';
import { isError } from 'lodash';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-update-room',
  templateUrl: './create-update-room.component.html',
  styleUrls: ['./create-update-room.component.scss'],
})
export class CreateUpdateRoomComponent implements OnInit {
  @Input() isUpdate = false;
  form: FormGroup = new FormGroup({});
  @Input() room: any;
  modules: any;

  constructor( private fb: FormBuilder,
    private modalRef: NzModalRef,
    private toast: ToastService,
    private roomService: RoomService,
) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  initForm(): void {
    this.form = this.fb.group({
      number: [
       this.isUpdate ? this.room?.number : null,
        [Validators.required],
      ],
      seatingCapacity: [
        this.isUpdate ? this.room?.seatingCapacity : '',
        [Validators.required],
      ],
      note: [
        this.isUpdate ? this.room?.note : '',
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
      this.updateRoom();
    } else {
      this.createRoom();
    }
  }

  private updateRoom(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const room: any = {
      ...this.form.value,
    };
    if (this.room?.id) {
      this.roomService.update(this.room.id, room).subscribe((res) => {
        if (res.status === STATUS.SUCCESS_200) {
          this.toast.success('common.success');
          this.modalRef.close({
            success: true,
            value: room,
          });
        }
      });
    }
  }

  private createRoom(): void {
    if (this.form.invalid) {
      CommonUtil.markFormGroupTouched(this.form);
      return;
    }
    const room: any = {
      ...this.form.value,
    };
    this.roomService.create(room).subscribe((room) => {
     
      if (room !== null) {
        this.toast.success('common.success');
        this.modalRef.close({
          success: true,
          value: room,
        });
      }
    },
      (err:Http2ServerResponse) => {
        console.log('Loi ' + err)
        this.toast.error('Đã có phòng trong cơ sở dữ liệu');
        this.modalRef.close({
          success: true,
          value: room,
        });
     }
    );
  }
}
