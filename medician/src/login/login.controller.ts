import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // login
  @Get()
  async get(@Body() SignInDto: SignInDto): Promise<any> {
    return this.loginService.get(SignInDto);
  }

  @Post()
  async post(@Body() signInDto: SignInDto) {
    let httpStatus: HttpStatus = await this.loginService.post(signInDto);
    if (HttpStatus.NOT_FOUND === httpStatus) {
      throw new HttpException('ID 가 없습니다', HttpStatus.NOT_FOUND); // NOTE: httpstatus 확인 필요.
    }
    if (HttpStatus.CONFLICT === httpStatus) {
      throw new HttpException('password 가 틀렸습니다.', HttpStatus.CONFLICT);
    }
  }

  // TODO: 사용자 정보 수정 기능 추가
  @Post('/modify')
  modify(@Body() SignInDto: SignInDto): any {
    return '';
  }
}
