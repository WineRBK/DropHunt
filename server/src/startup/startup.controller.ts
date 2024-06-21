import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { StartupService } from './startup.service';
import { Startup } from '@prisma/client'; // импорт типов для Prisma модели

@Controller('startups')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @Post()
  async create(
    @Body() 
    createStartupDto: {
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
    },
  ): Promise<Startup> {
    return this.startupService.createStartup(createStartupDto);
  }

  @Get()
  async findAll(): Promise<Startup[]> {
    return this.startupService.getAllStartups();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Startup> {
    return this.startupService.getStartupById(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStartupDto: Partial<Startup>,
  ): Promise<Startup> {
    return this.startupService.updateStartup(Number(id), updateStartupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Startup> {
    return this.startupService.deleteStartup(Number(id));
  }
}
