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

  get(signInDto: SignInDto): any {
    return signInDto;
  }

  async post(signInDto: SignInDto): Promise<HttpStatus> {
    const queryUserById: User[] = await this.queryUserById(signInDto.id);
    console.log(queryUserById);

    // 1. id 존재 여부 확인.
    if (0 === queryUserById.length) {
      return HttpStatus.NOT_FOUND;
    }

    // 2. password 확인.
    if (signInDto.password !== queryUserById[0].password) {
      return HttpStatus.CONFLICT;
    }

    return HttpStatus.OK;
  }

  async queryUserById(id: string): Promise<any> {
    return await this.repoUser
      .createQueryBuilder()
      .where(`User.id = '${id}'`)
      .getMany();
  }
}
