import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class ExtracurricularActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'usuario_id' })
  user: User;

  @Column()
  nome_atividade: string;

  @Column()
  detalhes: string;
}
