// prisma/prisma.module.ts

import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service'; // Предположим, что PrismaService описан в этом файле

@Module({
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    PrismaService, // Предоставляем PrismaService как провайдер
  ],
  exports: [PrismaClient, PrismaService], // Экспортируем для использования в других модулях
})
export class PrismaModule {}
