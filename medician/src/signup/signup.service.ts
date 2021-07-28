import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
  get(): string {
    return `SignupService`;
  }
}
