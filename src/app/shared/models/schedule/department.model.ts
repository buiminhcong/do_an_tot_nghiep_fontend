
export interface IDepartment {
    id?: number;
    deleted?: number;
    name?: string;
  }
export class Department implements IDepartment {
    constructor(
      public id?: number,
      public name?: string,
      public deleted?: number,
    ) {
      this.id = id;
      this.name = name;
      this.deleted = deleted;
    }
  }
  