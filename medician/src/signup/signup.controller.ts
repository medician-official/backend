import { Controller, Get, Query } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Get()
  get(
    @Query('id') id: string,
    @Query('password') password: string,
    @Query('etc') etc: string,
  ): string {
    return this.signupService.get();
  }
}
