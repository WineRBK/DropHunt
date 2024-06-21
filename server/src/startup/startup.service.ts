import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Startup } from '@prisma/client';

@Injectable()
export class StartupService {
  constructor(private prisma: PrismaService) {}

  async createStartup(data: {
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
  }): Promise<Startup> {
    return this.prisma.startup.create({ data });
  }

  async getAllStartups(): Promise<Startup[]> {
    return this.prisma.startup.findMany();
  }

  async getStartupById(id: number): Promise<Startup> {
    return this.prisma.startup.findUnique({ where: { id } });
  }

  async updateStartup(id: number, data: Partial<Startup>): Promise<Startup> {
    return this.prisma.startup.update({ where: { id }, data });
  }

  async deleteStartup(id: number): Promise<Startup> {
    return this.prisma.startup.delete({ where: { id } });
  }
}
