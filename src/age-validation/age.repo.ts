import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Age, AgeDocument } from "./age.model";
import { IDatabase } from "./db.interface";

@Injectable()
export class AgeRepository implements IDatabase {
  constructor(
    @InjectModel(Age.name) private readonly ageModel: Model<AgeDocument>
  ) {}

  async save(age: number): Promise<Age> {
    const createdAge = new this.ageModel({ age });
    return createdAge.save();
  }

  async findAll(): Promise<Age[]> {
    return this.ageModel.find().exec();
  }
}
