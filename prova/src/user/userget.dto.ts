import { ApiProperty } from "@nestjs/swagger";

export class UserGet {
    @ApiProperty({})
    id: number;

    @ApiProperty({})
    nome: string;

    @ApiProperty({})
    email: string;
    
    @ApiProperty({})
    senha: string;


  }