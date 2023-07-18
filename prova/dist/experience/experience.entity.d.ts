import { User } from '../user/user.entity';
export declare class Experience {
    id: number;
    user: User;
    nome_empresa: string;
    inicio_trabalho: Date;
    fim_trabalho: Date;
    trabalho_atual: boolean;
    cargo: string;
}
