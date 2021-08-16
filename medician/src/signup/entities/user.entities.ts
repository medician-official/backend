import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column()
  password: string;
  @Column({ default: '' })
  etc: string;
}
