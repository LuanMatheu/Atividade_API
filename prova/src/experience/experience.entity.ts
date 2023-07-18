import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'usuario_id' })
  user: User;

  @Column()
  nome_empresa: string;

  @Column({ type: 'date' })
  inicio_trabalho: Date;

  @Column({ type: 'date', nullable: true })
  fim_trabalho: Date;

  @Column({ default: false })
  trabalho_atual: boolean;

  @Column()
  cargo: string;
}
