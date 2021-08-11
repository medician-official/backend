import { Injectable } from '@nestjs/common';
import { CreateSignUpDto } from './dto/signup.dto';

@Injectable()
export class SignupService {
  // [NOTE] 임시로 DB 역할 자료구조
  private userInfoList: Array<CreateSignUpDto>;
  constructor() {
    this.userInfoList = new Array<CreateSignUpDto>();
  }

  login(signUpDto: CreateSignUpDto): any {
    console.log(signUpDto);
    this.userInfoList.push(signUpDto);
    console.log(`[SignupService] post`, this.userInfoList);

    return signUpDto;
  }

  // TODO: password 암호화?
  get(signUpDto: CreateSignUpDto): string {
    console.log(`[SignupService] get`, signUpDto);
    return `[SignupService] id: ${signUpDto.id}, password: ${signUpDto.password}, etc: ${signUpDto.etc}`;
  }
}
