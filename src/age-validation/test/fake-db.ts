import { Age } from "../age.model";
import { IDatabase } from "../db.interface";

export class FakeDatabase implements IDatabase {
  private memory: Map<string, number>;

  constructor() {
    this.memory = new Map();
  }

  private generateId() {
    return (Math.random() + 1).toString(36).substring(12);
  }

  async save(age: number): Promise<Age> {
    const id = this.generateId();
    this.memory.set(id, age);
    return {
      id: id,
      age,
    };
  }

  async findAll(): Promise<Age[]> {
    return Array.from(this.memory).map(([id, age]) => ({
      id,
      age,
    }));
  }
}
