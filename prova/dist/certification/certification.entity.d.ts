import { User } from '../user/user.entity';
export declare class Certification {
    id: number;
    user: User;
    nome_certificacao: string;
    instituicao: string;
    data_termino: Date;
}
