import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
  // TODO: password 암호화?
  get(id: string, password: string, etc: string): string {
    return `[SignupService] id: ${id}, password: ${password}, etc: ${etc}`;
  }
}
