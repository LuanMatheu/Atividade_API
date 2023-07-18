import { ApiProperty } from "@nestjs/swagger";

export class CreateEducationDto {
  @ApiProperty({})
    usuario_id: number;

    @ApiProperty({})
    instituicao_nome: string;

    @ApiProperty({})
    curso_nome: string;

    @ApiProperty({})
    ano_conclusao: number;
  }
  