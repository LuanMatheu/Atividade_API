import { ApiProperty } from "@nestjs/swagger";

export class CreateExperienceDto {
    @ApiProperty({})
    usuario_id: number;

    @ApiProperty({})
    nome_empresa: string;

    @ApiProperty({})
    inicio_trabalho: Date;

    @ApiProperty({})
    fim_trabalho: Date;

    @ApiProperty({})
    trabalho_atual: boolean;

    @ApiProperty({})
    cargo: string;
  }
  