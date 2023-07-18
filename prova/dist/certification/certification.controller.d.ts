import { CertificationsService } from './certification.service';
import { CreateCertificationDto } from './certification.dto';
export declare class CertificationsController {
    private readonly certificationsService;
    constructor(certificationsService: CertificationsService);
    getAllCertifications(): Promise<import("./certification.entity").Certification[]>;
    createCertification(createCertificationDto: CreateCertificationDto): Promise<import("./certification.entity").Certification>;
}
