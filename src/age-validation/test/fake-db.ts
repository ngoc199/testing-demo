import { IAge, IDatabase } from "../db.interface";

export class FakeDatabase implements IDatabase {
  private memory: Map<number, number>;
  private idCounter: number;

  constructor() {
    this.memory = new Map();
    this.idCounter = 0;
  }

  save(age: number): IAge {
    this.idCounter++;
    this.memory.set(this.idCounter, age);
    return {
      id: this.idCounter,
      age,
    };
  }

  findAll(): IAge[] {
    return Array.from(this.memory).map(([id, age]) => ({
      id,
      age,
    }));
  }
}
