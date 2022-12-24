import { Type } from '@modules/types/entities/Type';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type_id: number;

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'type_id' })
  type: Type;


  @Column()
  active: boolean;

  @Column()
  delete: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Category };
