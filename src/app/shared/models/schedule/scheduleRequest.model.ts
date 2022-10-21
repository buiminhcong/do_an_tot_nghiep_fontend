import { IClasses } from './class.model';

export interface IScheduleRequest {
  classes?: IClasses[];
}
export class ScheduleReq implements IScheduleRequest {
  constructor(public classes?: IClasses[]) {
    this.classes = classes;
  }
}
