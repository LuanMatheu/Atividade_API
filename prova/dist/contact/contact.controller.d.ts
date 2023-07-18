import { ContactsService } from './contact.service';
import { CreateContactDto } from './contact.dto';
import { Contact } from './contact.entity';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    getAllContacts(): Promise<Contact[]>;
    createContact(createContactDto: CreateContactDto): Promise<Contact>;
}
