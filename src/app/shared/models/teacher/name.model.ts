export interface IName {
    id?: number;
    firstName?: string;
    lastName?: string;
    middleName?: string;
}

export class Name implements IName {
    constructor(
       public id?: number,
       public firstName?: string,
       public lastName?: string,
       public middleName?: string
       )
     {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.middleName = middleName;
    }
  }