import { Repository } from 'typeorm';
import { Certification } from './certification.entity';
import { CreateCertificationDto } from './certification.dto';
export declare class CertificationsService {
    private readonly certificationRepository;
    constructor(certificationRepository: Repository<Certification>);
    getAllCertifications(): Promise<Certification[]>;
    createCertification(createCertificationDto: CreateCertificationDto): Promise<Certification>;
}
