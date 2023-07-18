import { Repository } from 'typeorm';
import { Education } from './education.entity';
import { CreateEducationDto } from './education.dto';
export declare class EducationService {
    private readonly educationRepository;
    constructor(educationRepository: Repository<Education>);
    getAllEducation(): Promise<Education[]>;
    createEducation(createEducationDto: CreateEducationDto): Promise<Education>;
}
