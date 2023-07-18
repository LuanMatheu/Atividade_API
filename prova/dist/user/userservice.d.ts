import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
