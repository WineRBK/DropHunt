import { PrismaService } from '../../prisma/prisma.service';
import { Startup } from '@prisma/client';
export declare class StartupService {
    private prisma;
    constructor(prisma: PrismaService);
    createStartup(data: {
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
    getAllStartups(): Promise<Startup[]>;
    getStartupById(id: number): Promise<Startup>;
    updateStartup(id: number, data: Partial<Startup>): Promise<Startup>;
    deleteStartup(id: number): Promise<Startup>;
}
