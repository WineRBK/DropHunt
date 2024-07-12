import { PrismaService } from '../../prisma/prisma.service';
import { Web } from '@prisma/client';
export declare class WebService {
    private prisma;
    constructor(prisma: PrismaService);
    createWeb(name: string): Promise<Web>;
    getAllWebs(): Promise<Web[]>;
    getWebById(id: number): Promise<Web | null>;
    updateWeb(id: number, data: Partial<Web>): Promise<Web>;
    deleteWeb(id: number): Promise<Web>;
}
