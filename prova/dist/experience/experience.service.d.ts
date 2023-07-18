import { Repository } from 'typeorm';
import { Experience } from './experience.entity';
import { CreateExperienceDto } from './experience.dto';
export declare class ExperienceService {
    private readonly experienceRepository;
    constructor(experienceRepository: Repository<Experience>);
    getAllExperiences(): Promise<Experience[]>;
    createExperience(createExperienceDto: CreateExperienceDto): Promise<Experience>;
}
