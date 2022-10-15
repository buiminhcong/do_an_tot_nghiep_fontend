
import { IAddress } from "./address.model";
import { IName } from "./name.model";

export interface IUser {
    id?: number;
    username?: string;
    password?: string;
    name?: IName;
    address?: IAddress;
}

export class User implements IUser {
    constructor(
       public id?: number,
       public username?: string,
       public password?: string,
       public name?: IName,
       public address?: IAddress,
       )
     {
      this.id = id;
      this.username = username;
      this.password = password;
      this.name = name;
      this.address = address;
    }
  }
  