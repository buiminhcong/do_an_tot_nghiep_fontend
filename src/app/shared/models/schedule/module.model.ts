
export interface IModule {
    id?: number;
    deleted?: number;
    name?: string;
    credits?: number;
  }
export class Module implements IModule {
    constructor(
      public id?: number,
      public name?: string,
      public deleted?: number,
      public credits?: number
    ) {
      this.id = id;
      this.name = name;
      this.deleted = deleted;
      this.credits = credits;
    }
  }
  