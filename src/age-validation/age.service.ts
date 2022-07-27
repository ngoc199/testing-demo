import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserApi } from "../user/user.api";
import { Age } from "./age.model";
import { AgeValidator } from "./age.validator";
import { IDatabase } from "./db.interface";

@Injectable()
export class AgeService {
  constructor(
    private readonly ageValidator: AgeValidator,
    private readonly user: UserApi,
    @Inject("IDatabase") private readonly db: IDatabase
  ) {}

  async validateAdult(age: number) {
    this.ageValidator.validate(age);
    if (!this.user.doThing(age)) return false;
    const isValid = age > 15;
    if (isValid) await this.db.save(age);
    return isValid;
  }

  isYoung(age: number) {
    this.ageValidator.validate(age);
    return age < 30;
  }

  async getAges() {
    return await this.db.findAll();
  }
}
