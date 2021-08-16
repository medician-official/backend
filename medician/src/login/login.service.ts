import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/signup/entities/user.entities';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    readonly repoUser: Repository<User>,
  ) {}

  async get(signInDto: SignInDto): Promise<any> {
    const queryUserById: User[] = await this.repoUser
      .createQueryBuilder()
      .where(`User.id = '${signInDto.id}'`)
      .getMany();
    console.log(queryUserById);

    // 1. id 존재 여부 확인.
    if (0 === queryUserById.length) {
      throw new HttpException('ID 가 없습니다', HttpStatus.NOT_FOUND); // NOTE: httpstatus 확인 필요.
    }

    // 2. password 확인.
    if (signInDto.password !== queryUserById[0].password) {
      throw new HttpException('password 가 틀렸습니다.', HttpStatus.CONFLICT);
    }

    return `login 성공!`;
  }

  post(signInDto: SignInDto): any {
    return signInDto;
  }
}
