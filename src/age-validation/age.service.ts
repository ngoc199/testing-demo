import { Injectable } from "@nestjs/common";
import { UserApi } from "../user/user.api";
import { AgeValidator } from "./age.validator";

@Injectable()
export class AgeService {
  constructor(private ageValidator: AgeValidator, private user: UserApi) {}

  validateAdult(age: number) {
    this.ageValidator.validate(age);
    if (!this.user.doThing(age)) return false;
    return age > 15;
  }

  isYoung(age: number) {
    this.ageValidator.validate(age);
    return age < 30;
  }
}
