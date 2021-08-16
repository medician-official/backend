import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSignUpDto } from './dto/signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  // 회원가입
  @Post()
  async post(@Body() signUpDto: CreateSignUpDto): Promise<any> {
    return this.signupService.post(signUpDto);
  }

  // [for debug] ID 확인용
  // @Get()
  // async get(
  //   // @Query('id') id: string,
  //   // @Query('password') password: string,
  //   // @Query('etc') etc: string,
  //   @Query() signUpDto: CreateSignUpDto,
  // ): Promise<any> {
  //   return this.signupService.get(signUpDto);
  // }

  // [for debug] ID 확인용
  @Get()
  async get(@Body() signUpDto: CreateSignUpDto): Promise<any> {
    return this.signupService.get(signUpDto);
  }
}
