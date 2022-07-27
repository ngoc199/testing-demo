export interface IAge {
  id: number;
  age: number;
}

export interface IDatabase {
  save(age: number): IAge;
  findAll(): IAge[];
}
