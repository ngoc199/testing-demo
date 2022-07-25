import { AgeService } from "../age.service";
import { AgeValidator } from "../age.validator";

/**
 * The builder to create an instance for testing
 */
export class AgeServiceBuilder {
  private ageValidator;

  constructor() {
    this.ageValidator = new AgeValidator();
  }

  setAgeValidator(validator: AgeValidator) {
    this.ageValidator = validator;
  }

  build() {
    return new AgeService(this.ageValidator);
  }
}
