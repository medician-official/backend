import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class SignUp {
  @PrimaryColumn()
  id: string;
  @PrimaryColumn()
  idx: number;
}
