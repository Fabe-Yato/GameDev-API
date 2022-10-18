import { PlataformaService } from './../service/plataforma.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
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

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Plataforma []>{
        return this.service.findByNome(nome)
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