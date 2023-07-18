import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'usuario_id' })
  user: User;

  @Column()
  instituicao_nome: string;

  @Column()
  curso_nome: string;

  @Column({ nullable: true })
  ano_conclusao: number;
}
