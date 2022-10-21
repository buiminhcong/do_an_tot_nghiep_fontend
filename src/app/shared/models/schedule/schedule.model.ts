export interface ISchedule {
    id?: number;
    deleted?: number;
    
   
}

export class Schedule implements ISchedule {
    constructor(
       public id?: number,
       public deleted?: number,
       )
     {
      this.id = id;
      this.deleted = deleted;
    }
  }