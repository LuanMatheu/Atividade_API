import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Certification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'usuario_id' })
  user: User;

  @Column()
  nome_certificacao: string;

  @Column()
  instituicao: string;

  @Column({ type: 'date', nullable: true })
  data_termino: Date;
}
