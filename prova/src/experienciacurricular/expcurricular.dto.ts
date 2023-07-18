import { ApiProperty } from "@nestjs/swagger";

export class CreateExtracurricularDto {
  @ApiProperty({})
    usuario_id: number;

    @ApiProperty({})
    nome_atividade: string;

    @ApiProperty({})
    detalhes: string;
  }
  