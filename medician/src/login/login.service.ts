import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  get(): string {
    return `LoginService`;
  }
}
