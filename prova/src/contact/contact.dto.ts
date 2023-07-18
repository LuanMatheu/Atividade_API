import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
  @ApiProperty({})
    usuario_id: number;

    @ApiProperty({})
    endereco: string;

    @ApiProperty({})
    telefone: string;

    @ApiProperty({})
    instagram: string;

    @ApiProperty({})
    linkedin: string;
  }
  