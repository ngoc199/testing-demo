import { Injectable } from "@nestjs/common";

@Injectable()
export class UserApi {
  doThing(num: number) {
    return num > 10;
  }
}
