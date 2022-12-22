import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('types')
class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  active: boolean;

  @Column()
  delete: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Type };
