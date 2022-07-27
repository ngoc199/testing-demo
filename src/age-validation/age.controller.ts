import { Body, Controller, Get, Post } from "@nestjs/common";
import { AgeService } from "./age.service";

class ValidateAdultBodyDto {
  age: number;
}

@Controller("/age")
export class AgeController {
  constructor(private readonly ageService: AgeService) {}

  @Post()
  async validateAdult(@Body() dto: ValidateAdultBodyDto) {
    return await this.ageService.validateAdult(dto.age);
  }

  @Get()
  async getAges() {
    return await this.ageService.getAges();
  }
}
