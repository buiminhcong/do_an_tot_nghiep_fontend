import { Module } from "webpack";
import { IModule } from "./module.model";

export interface ICourse {
    id?: number;
    deleted?: number;
    name?: string;
    number?: string;
    numberOfCourse?: number;
    maxNumbOfStudents?: number;
    module?: IModule;
}

export class Course implements ICourse {
    constructor(
      public id?: number,
      public name?: string,
      public number?: string,
      public deleted?: number,
      public numberOfCourse?: number,
      public maxNumbOfStudents?: number,
      public module?: IModule
    ) {
      this.id = id;
      this.name = name;
      this.deleted = deleted;
      this.number = number;
      this.maxNumbOfStudents = maxNumbOfStudents;
      this.numberOfCourse = numberOfCourse;
      this.module = module;
    }
  }
  