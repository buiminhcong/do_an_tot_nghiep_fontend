import { ISubject } from '../subject/subject.model';
import { IUser } from './user.module';

export interface ITeacherRequest {
  id?: number;
  code?: string;
  subject?: ISubject;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  email?: string;
  city?: string;
}

export class TeacherRequest implements ITeacherRequest {
  constructor(
    public id?: number,
    public code?: string,
    public subject?: ISubject,
    public username?: string,
    public password?: string,
    public firstName?: string,
    public lastName?: string,
    public middleName?: string,
    public phone?: string,
    public email?: string,
    public city?: string
  ) {
    this.id = id;
    this.code = code;
    this.subject = subject;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.middleName = middleName;
    this.phone = phone;
    this.email = email;
    this.city = city;
  }
}
