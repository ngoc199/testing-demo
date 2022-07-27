import { Age } from "./age.model";

export interface IDatabase {
  save(age: number): Promise<Age>;
  findAll(): Promise<Age[]>;
}
