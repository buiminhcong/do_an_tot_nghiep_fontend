export interface IMeettingTime {
    id?: number;
    deleted?: number;
    name?: string;
   
}

export class MeetingTime implements IMeettingTime {
    constructor(
       public id?: number,
       public deleted?: number,
       public name?: string,
       )
     {
      this.id = id;
      this.name = name;
      this.deleted = deleted;
    }
  }