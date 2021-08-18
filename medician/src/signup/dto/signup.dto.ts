import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSignUpDto {
  @IsNotEmpty({ message: '[empty] id' })
  @IsString()
  id: string;
  @IsNotEmpty({ message: '[empty] password' })
  @IsString()
  password: string;
  //   @IsNotEmpty({ message: 'not empty' })
  //   @IsString()
  etc: string;
}
