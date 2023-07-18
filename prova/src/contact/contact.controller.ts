import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { CreateContactDto } from './contact.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Contact } from './contact.entity';

@ApiTags('Contatos')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Retorna todos os contatos', type: Contact, isArray: true}) 
  getAllContacts() {
    return this.contactsService.getAllContacts();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Cria um contato', type: Contact}) 
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }
}
