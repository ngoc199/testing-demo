export class AgeValidator {
  validate(age: number) {
    if (!(Number.isInteger(age) && age > 0 && age < 200))
      throw new Error(age + " is an invalid age");
  }
}
