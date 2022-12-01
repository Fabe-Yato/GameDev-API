import { CapturasService } from './../service/capturas.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Capturas } from '../entities/capturas.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Capturas')
@Controller('/capturas')
export class CapturasController {
  constructor(private readonly service: CapturasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Capturas[]> {
    return this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() capturas: Capturas): Promise<Capturas> {
    return this.service.create(capturas);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Body() capturas: Capturas): Promise<Capturas> {
    return this.service.update(capturas);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
