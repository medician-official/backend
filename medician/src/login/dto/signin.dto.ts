import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: '[empty] id' })
  @IsString()
  id: string;
  @IsNotEmpty({ message: '[empty] password' })
  @IsString()
  password: string;
}
