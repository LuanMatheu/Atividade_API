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
exports.ExtracurricularController = void 0;
const common_1 = require("@nestjs/common");
const expcurricular_service_1 = require("./expcurricular.service");
const expcurricular_dto_1 = require("./expcurricular.dto");
const swagger_1 = require("@nestjs/swagger");
const expcurricular_entity_1 = require("./expcurricular.entity");
let ExtracurricularController = exports.ExtracurricularController = class ExtracurricularController {
    constructor(extracurricularService) {
        this.extracurricularService = extracurricularService;
    }
    getAllExtracurricular() {
        return this.extracurricularService.getAllExtracurricular();
    }
    createExtracurricular(createExtracurricularDto) {
        return this.extracurricularService.createExtracurricular(createExtracurricularDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna todos os usuários', type: expcurricular_entity_1.ExtracurricularActivity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExtracurricularController.prototype, "getAllExtracurricular", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Criar um usuário', type: expcurricular_entity_1.ExtracurricularActivity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expcurricular_dto_1.CreateExtracurricularDto]),
    __metadata("design:returntype", void 0)
], ExtracurricularController.prototype, "createExtracurricular", null);
exports.ExtracurricularController = ExtracurricularController = __decorate([
    (0, swagger_1.ApiTags)('ExtraCurricular'),
    (0, common_1.Controller)('extracurricular'),
    __metadata("design:paramtypes", [expcurricular_service_1.ExtracurricularService])
], ExtracurricularController);
//# sourceMappingURL=expcurricular.controller.js.map