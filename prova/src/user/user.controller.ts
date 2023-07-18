import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './userservice';
import { CreateUserDto } from './user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserGet } from './userget.dto';

@ApiTags('Usuário')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Retorna todos os usuários', type: UserGet, isArray: true})
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Cria o usuário', type: UserGet})
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}

 