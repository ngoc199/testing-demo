import request from "supertest";
import { MongooseModule } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { AgeValidationModule } from "../age-validation.module";
import { MongoMemoryServer } from "mongodb-memory-server";
import { INestApplication } from "@nestjs/common";

/*
 * In this integration test, we want to test the flow with the real infrastructure. We use real in-memory database in this case.
 * The integration test is slower to execute but should not slower than 3 minutes for all the tests.
 * The test should have multiple assertion to test the user flow.
 * We don't test the implementation here because we have done it in the unit tests.
 */
describe("Age Validation", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const mongodb = await MongoMemoryServer.create();
    const moduleRef = await Test.createTestingModule({
      imports: [MongooseModule.forRoot(mongodb.getUri()), AgeValidationModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it("validates age successful flow", async () => {
    // When validate new age
    const adultValidationResponse = await request(app.getHttpServer())
      .post("/age")
      .send({ age: 16 });
    expect(adultValidationResponse.status).toEqual(201);
    expect(adultValidationResponse.body).toBeTruthy();

    // When get all the ages
    const allAgeResponse = await request(app.getHttpServer()).get("/age");
    expect(allAgeResponse.status).toEqual(200);
    expect(allAgeResponse.body.length).toEqual(1);
  });
});
