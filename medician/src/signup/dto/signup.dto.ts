import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSignUpDto {
  @IsNotEmpty({ message: 'not empty' })
  @IsString()
  id: string;
  @IsNotEmpty({})
  @IsString()
  password: string;
  //   @IsNotEmpty({ message: 'not empty' })
  //   @IsString()
  etc: string;
}
