import { Controller, Get, Post, Body } from '@nestjs/common';
import { CertificationsService } from './certification.service';
import { CreateCertificationDto } from './certification.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ContactsController } from 'src/contact/contact.controller';

@ApiTags('Certificações')
@Controller('certifications')
export class CertificationsController {
  constructor(private readonly certificationsService: CertificationsService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Retorna todas as certificações', type: ContactsController, isArray: true}) 
  getAllCertifications() {
    return this.certificationsService.getAllCertifications();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Cria uma certificação', type: ContactsController})
  createCertification(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationsService.createCertification(createCertificationDto);
  }
}
