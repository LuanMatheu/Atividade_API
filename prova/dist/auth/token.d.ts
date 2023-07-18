import { NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';
export declare class TokenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
}
