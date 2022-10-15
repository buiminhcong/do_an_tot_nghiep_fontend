import { ISubject } from "../subject/subject.model";
import { IUser } from "./user.module";

export interface IInstructor {
    id?: number;
    code?: string;
    subject?: ISubject;
    user?: IUser;
}

export class Instructor implements IInstructor {
    constructor(
       public id?: number,
       public code?: string,
       public subject?: ISubject,
       public user?: IUser,
       )
     {
      this.id = id;
      this.code = code;
      this.subject = subject;
      this.user = user;
    }
  }
  