import { Injectable } from "@nestjs/common";
import { AgeValidator } from "./age.validator";

@Injectable()
export class AgeService {
  constructor(private ageValidator: AgeValidator) {}

  validateAdult(age: number) {
    this.ageValidator.validate(age);
    return age > 15;
  }

  isYoung(age: number) {
    this.ageValidator.validate(age);
    return age < 30;
  }
}
