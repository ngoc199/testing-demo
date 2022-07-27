import { UserApi } from "../../user/user.api";
import { AgeService } from "../age.service";
import { AgeValidator } from "../age.validator";

/**
 * The builder to create an instance for testing
 */
export class AgeServiceBuilder {
  private ageValidator: AgeValidator;
  private userApi: UserApi;

  constructor() {
    this.ageValidator = new AgeValidator();
    this.userApi = new UserApi();
  }

  setAgeValidator(validator: AgeValidator) {
    this.ageValidator = validator;
    return this;
  }

  setUserApi(userApi: UserApi) {
    this.userApi = userApi;
    return this;
  }

  build() {
    return new AgeService(this.ageValidator, this.userApi);
  }
}
