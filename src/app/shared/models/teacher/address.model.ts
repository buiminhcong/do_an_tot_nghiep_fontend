
export interface IAddress {
    id?: number;
    phone?: string;
    email?: string;
    city?: string;
}

export class Address implements IAddress {
    constructor(
       public id?: number,
       public phone?: string,
       public email?: string,
       public city?: string
       )
     {
      this.id = id;
      this.phone = phone;
      this.email = email;
      this.city = city;
    }
  }
  