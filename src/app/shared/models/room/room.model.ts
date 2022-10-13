
export interface IRoom {
  id?: number;
  deleted?: number;
  number?: string;
  seatingCapacity?: number;
  note?: string;
}

export class Room implements IRoom {
  constructor(
    public id?: number,
    public deleted?: number,
    public number?: string,
    public seatingCapacity?: number,
    public note?: string
  ) {
    this.id = id;
    this.deleted = deleted;
    this.number = number;
    this.seatingCapacity = seatingCapacity;
    this.note = note;
  }
}
