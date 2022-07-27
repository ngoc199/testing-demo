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

  it("throws error when age is less than or equal to 0", async () => {
    await expect(() => ageService.validateAdult(0)).rejects.toThrowError();
    await expect(() => ageService.validateAdult(-1)).rejects.toThrowError();
    expect((await fakeDb.findAll()).length).toEqual(0);
  });

  it("returns false when age is less than or equal to 15", async () => {
    mockDoThing.mockReturnValueOnce(true);
    expect(await ageService.validateAdult(15)).toBeFalsy();
    expect((await fakeDb.findAll()).length).toEqual(0);

    mockDoThing.mockReturnValueOnce(false);
    expect(await ageService.validateAdult(10)).toBeFalsy();
    expect((await fakeDb.findAll()).length).toEqual(0);
  });

  it("returns true when age is greater than 15", async () => {
    mockDoThing.mockReturnValueOnce(true);
    expect(await ageService.validateAdult(16)).toBeTruthy();
    expect((await fakeDb.findAll()).length).toEqual(1);
  });

  it("throws error when age is greater than or equal to 200", async () => {
    await expect(() => ageService.validateAdult(200)).rejects.toThrowError();
    expect((await fakeDb.findAll()).length).toEqual(0);
    await expect(() => ageService.validateAdult(201)).rejects.toThrowError();
    expect((await fakeDb.findAll()).length).toEqual(0);
  });
});
