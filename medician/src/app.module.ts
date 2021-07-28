import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { SearchModule } from './search/search.module';
import { SearchService } from './search/search.service';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [SearchModule, SignupModule, LoginModule],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}
