import { EducationService } from './education.service';
import { CreateEducationDto } from './education.dto';
import { Education } from './education.entity';
export declare class EducationController {
    private readonly educationService;
    constructor(educationService: EducationService);
    getAllEducation(): Promise<Education[]>;
    createEducation(createEducationDto: CreateEducationDto): Promise<Education>;
}
