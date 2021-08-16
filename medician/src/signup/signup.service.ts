import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSignUpDto } from './dto/signup.dto';
import { User } from './entities/user.entities';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User)
    readonly repoUser: Repository<User>,
  ) {}

  async post(signUpDto: CreateSignUpDto): Promise<any> {
    console.log(`[SignupService][post] signUpDto`, signUpDto);
    let queryUserById: User[] = await this.queryUserById(signUpDto.id);

    console.log(
      `[SignupService][post][id 등록 전] queryUserById`,
      queryUserById,
      queryUserById.length,
    );
    // 1. id 중복 확인
    if (1 <= queryUserById.length) {
      throw new HttpException('이미 존재하는 ID', HttpStatus.CONFLICT);
    }
    // TODO: 2. 적절한 password 형식인지 확인

    await this.repoUser.save(signUpDto);
    return 'ID 등록 성공!';
  }

  async get(signUpDto: CreateSignUpDto): Promise<any> {
    console.log(`[SignupService][get] signUpDto`, signUpDto);

    return await this.queryUserById(signUpDto.id);
  }

  async queryUserById(id: string): Promise<any> {
    return await this.repoUser
      .createQueryBuilder()
      .where(`User.id = '${id}'`)
      .getMany();
  }
}
