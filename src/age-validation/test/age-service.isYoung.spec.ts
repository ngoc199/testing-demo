import { AgeService } from "../age.service";

describe("AgeService.isYoung", () => {
  const ageService = new AgeService();

  it("throws error when age is less than or equal to 0", () => {
    expect(() => ageService.isYoung(0)).toThrowError();
    expect(() => ageService.isYoung(-1)).toThrowError();
  });

  it("throws error when age is greater or equal to 200", () => {
    expect(() => ageService.isYoung(200)).toThrowError();
    expect(() => ageService.isYoung(201)).toThrowError();
  });

  it("returns false when age is greater or equal to 30", () => {
    expect(ageService.isYoung(30)).toBeFalsy();
    expect(ageService.isYoung(31)).toBeFalsy();
  });

  it("returns true when age is less than 30", () => {
    expect(ageService.isYoung(29)).toBeTruthy();
  });
});
