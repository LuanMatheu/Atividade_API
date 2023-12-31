import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExtracurricularService } from './expcurricular.service';
import { CreateExtracurricularDto } from './expcurricular.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ExtracurricularActivity } from './expcurricular.entity';

@ApiTags('ExtraCurricular')
@Controller('extracurricular')
export class ExtracurricularController {
  constructor(private readonly extracurricularService: ExtracurricularService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Retorna todos os usuários', type: ExtracurricularActivity, isArray: true})
  getAllExtracurricular() {
    return this.extracurricularService.getAllExtracurricular();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Criar um usuário', type: ExtracurricularActivity })
  createExtracurricular(@Body() createExtracurricularDto: CreateExtracurricularDto) {
    return this.extracurricularService.createExtracurricular(createExtracurricularDto);
  }
}
