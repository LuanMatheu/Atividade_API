import { UsersService } from './userservice';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
