import { Injectable } from "@nestjs/common";

@Injectable()
export class AgeService {
  constructor() {}

  validateAdult(age: number) {
    this.validateAge(age);
    return age > 15;
  }

  isYoung(age: number) {
    this.validateAge(age);
    return age < 30;
  }

  validateAge(age: number) {
    if (age <= 0 || age >= 100) throw new Error(age + " is an invalid age");
  }
}
