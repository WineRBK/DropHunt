import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module'; // импорт модуля Prisma
import { WebController } from './web.controller';
import { WebService } from './web.service';

@Module({
  imports: [PrismaModule], // подключаем PrismaModule для доступа к PrismaService
  controllers: [WebController],
  providers: [WebService],
})
export class WebModule {}
