import { Component, OnInit } from '@angular/core';
import { IRoom } from '@shared/models/room/room.model';
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
import { RoomService } from '@shared/services/room/room.service';

@Component({
  selector: 'app-statictis-room',
  templateUrl: './statictis-room.component.html',
  styleUrls: ['./statictis-room.component.scss']
})
export class StatictisRoomComponent implements OnInit {

  sortBy = '';
  numberRoom: any;
  total = 0;
  loading = false;
  isVisible = false;
  role: any;
  isFirstFetch = true;
  room: any;
  rooms: IRoom[] = [];

  constructor(
    private router: Router,
    private toast: ToastService,
    private modalService: NzModalService,
    private scheduleService: ScheduleService,
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
  ) { 
    this.getAllRoom();
  }

  ngOnInit(): void {
    this.getAllRoom();
  }

  getAllRoom(): void {

    this.role = this.localStorage.retrieve(LOCAL_STORAGE.ROLE);
    console.log( "role: "+ this.role);
    this.scheduleService.getRoomStatistic(this.loading).subscribe(
      (response: any) => {
        this.rooms = response?.body;
        console.log(response?.body?.data);
        console.log(this.rooms);
      },
      (error: any) => {
        this.rooms = [];
      }
    );
  }

  delete(room: any): void {
    this.room = room;
    this.numberRoom = this.room.number;
    this.isVisible = true;
  }

  // onDelete(result: { success: boolean }): void {
  //   if (result && result?.success) {
  //     this.roomService.delete(this.room.id).subscribe((res) => {
  //       this.getAllRoom();
  //       this.toast.success('common.success');
  //     });
  //     this.isVisible = false;
  //   } else {
  //     this.isVisible = false;
  //   }
  // }

 

}
