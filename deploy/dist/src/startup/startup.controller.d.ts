import { StartupService } from './startup.service';
import { Startup } from '@prisma/client';
export declare class StartupController {
    private readonly startupService;
    constructor(startupService: StartupService);
    create(createStartupDto: {
        name: string;
        category: string;
        image: any;
        links: any;
        raise: number;
        valuation: number;
        investors: any;
        twitterScore: number;
        webs: any;
        tier: string;
        status: string;
        actions: string[];
        estimated: number;
        deadline: Date;
        content: string;
    }): Promise<Startup>;
    findAll(): Promise<Startup[]>;
    findOne(id: string): Promise<Startup>;
    update(id: string, updateStartupDto: Partial<Startup>): Promise<Startup>;
    remove(id: string): Promise<Startup>;
}
