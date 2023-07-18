import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './contact.dto';
export declare class ContactsService {
    private readonly contactRepository;
    constructor(contactRepository: Repository<Contact>);
    getAllContacts(): Promise<Contact[]>;
    createContact(createContactDto: CreateContactDto): Promise<Contact>;
}
