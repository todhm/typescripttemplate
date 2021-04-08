import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity('dummy')
export class Dummy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  data: string;


  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;


}
