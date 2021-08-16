import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { User } from './entities/user.entities';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), { autoLoadEntities: true }),
    }),
    // NOTE: ormconfig.json 에 database 관련 속성값 정의되어 있습니다.,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
