"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const contact_dto_1 = require("./contact.dto");
const swagger_1 = require("@nestjs/swagger");
const contact_entity_1 = require("./contact.entity");
let ContactsController = exports.ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    getAllContacts() {
        return this.contactsService.getAllContacts();
    }
    createContact(createContactDto) {
        return this.contactsService.createContact(createContactDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna todos os contatos', type: contact_entity_1.Contact, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "getAllContacts", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Cria um contato', type: contact_entity_1.Contact }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "createContact", null);
exports.ContactsController = ContactsController = __decorate([
    (0, swagger_1.ApiTags)('Contatos'),
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [contact_service_1.ContactsService])
], ContactsController);
//# sourceMappingURL=contact.controller.js.map