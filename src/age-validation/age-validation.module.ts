import { Module, Provider } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AgeSchema, Age } from "./age.model";
import { AgeService } from "./age.service";
import { AgeController } from "./age.controller";
import { AgeValidator } from "./age.validator";
import { UserModule } from "../user/user.module";
import { AgeRepository } from "./age.repo";

const ageRepoProvider: Provider = {
  provide: "IDatabase",
  useClass: AgeRepository,
};

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Age.name, schema: AgeSchema }]),
    UserModule,
  ],
  providers: [AgeService, AgeValidator, ageRepoProvider],
  controllers: [AgeController],
})
export class AgeValidationModule {}
