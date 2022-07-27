import { UserApi } from "../../user/user.api";
import { AgeService } from "../age.service";
import { AgeServiceBuilder } from "./age-service.builder";
import { FakeDatabase } from "./fake-db";

const mockDoThing = jest.fn();

describe("AgeService.validateAdult", () => {
  const userApi: UserApi = {
    doThing: mockDoThing,
  };
  let fakeDb: FakeDatabase = new FakeDatabase();
  let ageService: AgeService;

  beforeEach(() => {
    mockDoThing.mockClear();

    fakeDb = new FakeDatabase();
    ageService = new AgeServiceBuilder()
      .setUserApi(userApi)
      .setDatabase(fakeDb)
      .build();
  });

  it("throws error when age is less than or equal to 0", () => {
    expect(() => ageService.validateAdult(0)).toThrowError();
    expect(() => ageService.validateAdult(-1)).toThrowError();
    expect(fakeDb.findAll().length).toEqual(0);
  });

  it("returns false when age is less than or equal to 15", () => {
    mockDoThing.mockReturnValueOnce(true);
    expect(ageService.validateAdult(15)).toBeFalsy();
    expect(fakeDb.findAll().length).toEqual(0);

    mockDoThing.mockReturnValueOnce(false);
    expect(ageService.validateAdult(10)).toBeFalsy();
    expect(fakeDb.findAll().length).toEqual(0);
  });

  it("returns true when age is greater than 15", () => {
    mockDoThing.mockReturnValueOnce(true);
    expect(ageService.validateAdult(16)).toBeTruthy();
    expect(fakeDb.findAll().length).toEqual(1);
  });

  it("throws error when age is greater than or equal to 200", () => {
    expect(() => ageService.validateAdult(200)).toThrowError();
    expect(fakeDb.findAll().length).toEqual(0);
    expect(() => ageService.validateAdult(201)).toThrowError();
    expect(fakeDb.findAll().length).toEqual(0);
  });
});
