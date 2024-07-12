import { WebService } from './web.service';
import { Web } from '.prisma/client';
export declare class WebController {
    private readonly webService;
    constructor(webService: WebService);
    create(createWebDto: {
        name: string;
    }): Promise<Web>;
    findAll(): Promise<Web[]>;
    findOne(id: string): Promise<Web>;
    update(id: string, updateWebDto: Partial<Web>): Promise<Web>;
    remove(id: string): Promise<Web>;
}
