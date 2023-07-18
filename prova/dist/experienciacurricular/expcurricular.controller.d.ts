import { ExtracurricularService } from './expcurricular.service';
import { CreateExtracurricularDto } from './expcurricular.dto';
import { ExtracurricularActivity } from './expcurricular.entity';
export declare class ExtracurricularController {
    private readonly extracurricularService;
    constructor(extracurricularService: ExtracurricularService);
    getAllExtracurricular(): Promise<ExtracurricularActivity[]>;
    createExtracurricular(createExtracurricularDto: CreateExtracurricularDto): Promise<ExtracurricularActivity>;
}
