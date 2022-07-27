import { Module } from "@nestjs/common";
import { UserApi } from "./user.api";

@Module({
  providers: [UserApi],
  exports: [UserApi],
})
export class UserModule {}
