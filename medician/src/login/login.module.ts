import { Module } from '@nestjs/common';
import { getConnectionOptions } from 'typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/signup/entities/user.entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), { autoLoadEntities: true }),
    }),
    // NOTE: ormconfig.json 에 database 관련 속성값 정의되어 있습니다.,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
