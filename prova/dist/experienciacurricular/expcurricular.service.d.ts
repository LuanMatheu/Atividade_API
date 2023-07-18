import { Repository } from 'typeorm';
import { ExtracurricularActivity } from './expcurricular.entity';
import { CreateExtracurricularDto } from './expcurricular.dto';
export declare class ExtracurricularService {
    private readonly extracurricularRepository;
    constructor(extracurricularRepository: Repository<ExtracurricularActivity>);
    getAllExtracurricular(): Promise<ExtracurricularActivity[]>;
    createExtracurricular(createExtracurricularDto: CreateExtracurricularDto): Promise<ExtracurricularActivity>;
}
