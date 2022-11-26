import { GeneroService } from './../service/genero.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, ParseIntPipe, Delete} from "@nestjs/common";
import { Genero } from '../entities/genero.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Genero')
@Controller('/genero')
export class GeneroController{
    constructor(
        private readonly service: GeneroService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Genero []>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Genero> {
        return this.service.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() genero: Genero): Promise<Genero>{
        return this.service.create(genero)
    }

    @Put("/:id")
    @HttpCode(HttpStatus.OK)
    update(@Body() genero: Genero): Promise<Genero>{
        return this.service.update(genero)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}
