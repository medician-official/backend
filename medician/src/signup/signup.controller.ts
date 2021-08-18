import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { CreateSignUpDto } from './dto/signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  // 회원가입
  @Post()
  async post(@Body() signUpDto: CreateSignUpDto) {
    let httpStatus: Promise<HttpStatus> = this.signupService.post(signUpDto);
    if (HttpStatus.CONFLICT === (await httpStatus)) {
      throw new HttpException('이미 존재하는 ID', HttpStatus.CONFLICT);
    }
  }

  // [for debug] ID 확인용: url 로 값 전달받는 경우에 사용
  // @Get()
  // async get(
  //   // @Query('id') id: string,
  //   // @Query('password') password: string,
  //   // @Query('etc') etc: string,
  //   @Query() signUpDto: CreateSignUpDto,
  // ): Promise<any> {
  //   return this.signupService.get(signUpDto);
  // }

  // [for debug] ID 확인용: body 로 값 전달받는 경우에 사용
  @Get()
  async get(@Body() signUpDto: CreateSignUpDto): Promise<any> {
    return this.signupService.get(signUpDto);
  }
}
