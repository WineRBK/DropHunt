import { Module } from '@nestjs/common';
import { StartupController } from '../startup/startup.controller';
import { StartupService } from '../startup/startup.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [StartupController],
  providers: [StartupService, PrismaService],
})
export class StartupModule {}
