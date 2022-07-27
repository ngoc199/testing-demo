import { Injectable } from "@nestjs/common";
import { UserApi } from "../user/user.api";
import { AgeValidator } from "./age.validator";
import { IDatabase } from "./db.interface";

@Injectable()
export class AgeService {
  constructor(
    private ageValidator: AgeValidator,
    private user: UserApi,
    private db: IDatabase
  ) {}

  validateAdult(age: number) {
    this.ageValidator.validate(age);
    if (!this.user.doThing(age)) return false;
    const isValid = age > 15;
    if (isValid) this.db.save(age);
    return isValid;
  }

  isYoung(age: number) {
    this.ageValidator.validate(age);
    return age < 30;
  }
}
