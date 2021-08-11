import { Controller, Get, Query } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}

    @Get('/addItem')
    getHello(@Query('id') id : number): string {
        console.log(id);
    return this.likeService.getAdd(id);
    }

}