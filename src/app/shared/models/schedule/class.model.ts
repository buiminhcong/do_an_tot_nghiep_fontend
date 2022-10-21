import { IRoom } from '../room/room.model';
import { IInstructor } from '../teacher/instructor.model';
import { ICourse } from './course.model';
import { IDepartment } from './department.model';
import { IMeettingTime } from './meetingtime.model';
import { ISchedule } from './schedule.model';

export interface IClasses {
  id?: number;
  deleted?: number;
  deparment?: IDepartment;
  course?: ICourse;
  instructor?: IInstructor;
  meetingtime?: IMeettingTime;
  room?: IRoom;
  schedule?: ISchedule;
}

export class Classes implements IClasses {
  constructor(
    public id?: number,
    public deleted?: number,
    public deparment?: IDepartment,
    public course?: ICourse,
    public instructor?: IInstructor,
    public meetingtime?: IMeettingTime,
    public room?: IRoom,
    public schedule?: ISchedule
  ) {
    this.id = id;
    this.deleted = deleted;
    this.deparment = deparment;
    this.course = course;
    this.instructor = instructor;
    this.meetingtime = meetingtime;
    this.room = room;
    this.schedule = schedule;
  }
}
