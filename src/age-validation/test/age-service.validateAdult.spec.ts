import { UserApi } from "../../user/user.api";
import { AgeService } from "../age.service";
import { AgeServiceBuilder } from "./age-service.builder";

const mockDoThing = jest.fn();

describe("AgeService.validateAdult", () => {
  const userApi: UserApi = {
    doThing: mockDoThing,
  };
  const ageService = new AgeServiceBuilder().setUserApi(userApi).build();

  beforeEach(() => {
    mockDoThing.mockClear();
  });

  it("throws error when age is less than or equal to 0", () => {
    expect(() => ageService.validateAdult(0)).toThrowError();
    expect(() => ageService.validateAdult(-1)).toThrowError();
  });

  it("returns false when age is less than or equal to 15", () => {
    mockDoThing.mockReturnValueOnce(true);
    expect(ageService.validateAdult(15)).toBeFalsy();

    mockDoThing.mockReturnValueOnce(false);
    expect(ageService.validateAdult(10)).toBeFalsy();
  });

  it("returns true when age is greater than 15", () => {
    mockDoThing.mockReturnValueOnce(true);
    expect(ageService.validateAdult(16)).toBeTruthy();
  });

  it("throws error when age is greater than or equal to 200", () => {
    expect(() => ageService.validateAdult(200)).toThrowError();
    expect(() => ageService.validateAdult(201)).toThrowError();
  });
});
