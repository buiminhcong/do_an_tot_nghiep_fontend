import { ISubject } from "../subject/subject.model";

export interface IModuleRequest {
    deleted?: number;
    name?: string;
    moduleCode?: string;
    credits?: number;
    subject?: ISubject;
  }
export class ModuleRequest implements IModuleRequest {
    constructor(
      public name?: string,
      public moduleCode?: string,
      public deleted?: number,
      public credits?: number,
      public subject?: ISubject
    ) {
      this.name = name;
      this.moduleCode = moduleCode;
      this.deleted = deleted;
      this.credits = credits;
      this.subject = subject;
    }
  }
  