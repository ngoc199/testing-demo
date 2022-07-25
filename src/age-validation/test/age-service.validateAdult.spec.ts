import { AgeService } from "../age.service";
import { AgeServiceBuilder } from "./age-service.builder";

describe("AgeService.validateAdult", () => {
  const ageService = new AgeServiceBuilder().build();

  it("throws error when age is less than or equal to 0", () => {
    expect(() => ageService.validateAdult(0)).toThrowError();
    expect(() => ageService.validateAdult(-1)).toThrowError();
  });

  it("returns false when age is less than or equal to 15", () => {
    expect(ageService.validateAdult(15)).toBeFalsy();
  });

  it("returns true when age is greater than 15", () => {
    expect(ageService.validateAdult(16)).toBeTruthy();
  });

  it("throws error when age is greater than or equal to 200", () => {
    expect(() => ageService.validateAdult(200)).toThrowError();
    expect(() => ageService.validateAdult(201)).toThrowError();
  });
});
