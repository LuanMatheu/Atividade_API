import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './experience.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Experience } from './experience.entity';

@ApiTags('Experience')
@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Retorna todos as experiências curriculares', type: Experience, isArray: true})
  getAllExperiences() {
    return this.experienceService.getAllExperiences();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Cria uma nova experiência', type: Experience})
  createExperience(@Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.createExperience(createExperienceDto);
  }
}
