import { UserApi } from "../../user/user.api";
import { AgeService } from "../age.service";
import { AgeValidator } from "../age.validator";
import { IDatabase } from "../db.interface";
import { FakeDatabase } from "./fake-db";

/**
 * The builder to create an instance for testing
 */
export class AgeServiceBuilder {
  private ageValidator: AgeValidator;
  private userApi: UserApi;
  private db: IDatabase;

  constructor() {
    this.ageValidator = new AgeValidator();
    this.userApi = new UserApi();
    this.db = new FakeDatabase();
  }

  setAgeValidator(validator: AgeValidator) {
    this.ageValidator = validator;
    return this;
  }

  setUserApi(userApi: UserApi) {
    this.userApi = userApi;
    return this;
  }

  setDatabase(db: IDatabase) {
    this.db = db;
    return this;
  }

  build() {
    return new AgeService(this.ageValidator, this.userApi, this.db);
  }
}
