import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { CreateSignUpDto } from './dto/signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  // login
  @Post()
  @HttpCode(200) // default 200
  post(@Body() signUpDto: CreateSignUpDto): any {
    return this.signupService.login(signUpDto);
  }

  @Get()
  get(
    // @Query('id') id: string,
    // @Query('password') password: string,
    // @Query('etc') etc: string,
    @Query() signUpDto: CreateSignUpDto,
  ): string {
    return this.signupService.get(signUpDto);
  }
}
