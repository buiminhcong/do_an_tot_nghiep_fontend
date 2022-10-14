
export interface ISubject {
    id?: number;
    deleted?: number;
    name?: string;
   
  }
export class Subject implements ISubject {
    constructor(
      public id?: number,
      public name?: string,
      public deleted?: number
    ) {
      this.id = id;
      this.name = name;
      this.deleted = deleted;
    }
  }
  