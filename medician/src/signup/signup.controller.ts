import { Controller, Get } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Get()
  get(): string {
    return this.signupService.get();
  }
}
