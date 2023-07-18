import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './experience.dto';
import { Experience } from './experience.entity';
export declare class ExperienceController {
    private readonly experienceService;
    constructor(experienceService: ExperienceService);
    getAllExperiences(): Promise<Experience[]>;
    createExperience(createExperienceDto: CreateExperienceDto): Promise<Experience>;
}
