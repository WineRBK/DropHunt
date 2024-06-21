// src/web/web.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // ваш сервис Prisma
import { Web } from '@prisma/client'; // импорт типов для Prisma модели

@Injectable()
export class WebService {
  constructor(private prisma: PrismaService) {}

  async createWeb(name: string): Promise<Web> {
    return this.prisma.web.create({
      data: {
        name,
      },
    });
  }

  async getAllWebs(): Promise<Web[]> {
    return this.prisma.web.findMany();
  }

  async getWebById(id: number): Promise<Web | null> {
    return this.prisma.web.findUnique({
      where: { id },
    });
  }

  async updateWeb(id: number, data: Partial<Web>): Promise<Web> {
    return this.prisma.web.update({
      where: { id },
      data,
    });
  }

  async deleteWeb(id: number): Promise<Web> {
    return this.prisma.web.delete({
      where: { id },
    });
  }
}
