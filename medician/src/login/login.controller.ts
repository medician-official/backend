import { Body, Controller, Get, Post } from '@nestjs/common';
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
  post(@Body() signInDto: SignInDto): any {
    return this.loginService.post(signInDto);
  }
}
