import { PlataformaService } from './../service/plataforma.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, ParseIntPipe} from "@nestjs/common";
import { Plataforma } from '../entities/plataforma.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Plataforma')
@Controller('/plataforma')
export class PlataformaController{
    constructor(
        private readonly service: PlataformaService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Plataforma []>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Plataforma> {
        return this.service.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() plataforma: Plataforma): Promise<Plataforma>{
        return this.service.create(plataforma)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() plataforma: Plataforma): Promise<Plataforma>{
        return this.service.update(plataforma)
    }
}
