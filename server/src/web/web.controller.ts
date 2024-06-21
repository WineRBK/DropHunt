// src/web/web.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { WebService } from './web.service';
import { Web } from '.prisma/client'; // импорт типов для Prisma модели

@Controller('web')
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Post()
  async create(@Body() createWebDto: { name: string }): Promise<Web> {
    const { name } = createWebDto;
    return this.webService.createWeb(name);
  }

  @Get()
  async findAll(): Promise<Web[]> {
    return this.webService.getAllWebs();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Web> {
    return this.webService.getWebById(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWebDto: Partial<Web>,
  ): Promise<Web> {
    return this.webService.updateWeb(Number(id), updateWebDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Web> {
    return this.webService.deleteWeb(Number(id));
  }
}
