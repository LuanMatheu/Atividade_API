"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user/user.controller");
const userservice_1 = require("./user/userservice");
const user_entity_1 = require("./user/user.entity");
const contact_controller_1 = require("./contact/contact.controller");
const contact_service_1 = require("./contact/contact.service");
const contact_entity_1 = require("./contact/contact.entity");
const experience_controller_1 = require("./experience/experience.controller");
const experience_service_1 = require("./experience/experience.service");
const experience_entity_1 = require("./experience/experience.entity");
const education_controller_1 = require("./education/education.controller");
const education_service_1 = require("./education/education.service");
const education_entity_1 = require("./education/education.entity");
const expcurricular_controller_1 = require("./experienciacurricular/expcurricular.controller");
const expcurricular_service_1 = require("./experienciacurricular/expcurricular.service");
const expcurricular_entity_1 = require("./experienciacurricular/expcurricular.entity");
const certification_controller_1 = require("./certification/certification.controller");
const certification_service_1 = require("./certification/certification.service");
const certification_entity_1 = require("./certification/certification.entity");
const token_1 = require("./auth/token");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(token_1.TokenMiddleware)
            .forRoutes('extraCurricular', 'experience', 'education', 'certification', 'address');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'prova',
                entities: [
                    user_entity_1.User,
                    contact_entity_1.Contact,
                    experience_entity_1.Experience,
                    education_entity_1.Education,
                    expcurricular_entity_1.ExtracurricularActivity,
                    certification_entity_1.Certification,
                ],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                contact_entity_1.Contact,
                experience_entity_1.Experience,
                education_entity_1.Education,
                expcurricular_entity_1.ExtracurricularActivity,
                certification_entity_1.Certification,
            ]),
        ],
        controllers: [user_controller_1.UsersController, certification_controller_1.CertificationsController, contact_controller_1.ContactsController, education_controller_1.EducationController, experience_controller_1.ExperienceController, expcurricular_controller_1.ExtracurricularController],
        providers: [userservice_1.UsersService, certification_service_1.CertificationsService, contact_service_1.ContactsService, education_service_1.EducationService, experience_service_1.ExperienceService, expcurricular_service_1.ExtracurricularService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map