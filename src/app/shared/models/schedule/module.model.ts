
export interface IModule {
    id?: number;
    deleted?: number;
    name?: string;
    moduleCode?: string;
    credits?: number;
  }
export class Module implements IModule {
    constructor(
      public id?: number,
      public name?: string,
      public moduleCode?: string,
      public deleted?: number,
      public credits?: number
    ) {
      this.id = id;
      this.name = name;
      this.moduleCode = moduleCode;
      this.deleted = deleted;
      this.credits = credits;
    }
  }
  