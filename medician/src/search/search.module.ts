import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { ProductInfo } from './entities/search.entities';
import { SearchController } from './search.controller';
// import { SearchService } from './search.service';
import { SearchService } from './search.service_typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), { autoLoadEntities: true }),
    }),
    // NOTE: ormconfig.json 에 database 관련 속성값 정의되어 있습니다.
    TypeOrmModule.forFeature([ProductInfo]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
