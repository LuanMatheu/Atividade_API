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
exports.CertificationsController = void 0;
const common_1 = require("@nestjs/common");
const certification_service_1 = require("./certification.service");
const certification_dto_1 = require("./certification.dto");
const swagger_1 = require("@nestjs/swagger");
const contact_controller_1 = require("../contact/contact.controller");
let CertificationsController = exports.CertificationsController = class CertificationsController {
    constructor(certificationsService) {
        this.certificationsService = certificationsService;
    }
    getAllCertifications() {
        return this.certificationsService.getAllCertifications();
    }
    createCertification(createCertificationDto) {
        return this.certificationsService.createCertification(createCertificationDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna todas as certificações', type: contact_controller_1.ContactsController, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CertificationsController.prototype, "getAllCertifications", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Cria uma certificação', type: contact_controller_1.ContactsController }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [certification_dto_1.CreateCertificationDto]),
    __metadata("design:returntype", void 0)
], CertificationsController.prototype, "createCertification", null);
exports.CertificationsController = CertificationsController = __decorate([
    (0, swagger_1.ApiTags)('Certificações'),
    (0, common_1.Controller)('certifications'),
    __metadata("design:paramtypes", [certification_service_1.CertificationsService])
], CertificationsController);
//# sourceMappingURL=certification.controller.js.map