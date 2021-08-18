import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { AdminModule } from './admin/admin.module';
import { LikeModule } from './like/like.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { ViewController } from './view/view.controller';
import { ViewService } from './view/view.service';

@Module({
  imports: [SearchModule, SignupModule, LoginModule, AdminModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
