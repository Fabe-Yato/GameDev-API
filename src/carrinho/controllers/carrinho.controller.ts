import { CarrinhoService } from './../service/carrinho.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import { Carrinho } from '../entities/carrinho.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Carrinho')
@Controller('/carrinho')
export class CarrinhoController{
    constructor(
        private readonly service: CarrinhoService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Carrinho []>{
        return this.service.findAll()
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Carrinho []>{
        return this.service.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Carrinho: Carrinho): Promise<Carrinho>{
        return this.service.create(Carrinho)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Carrinho: Carrinho): Promise<Carrinho>{
        return this.service.update(Carrinho)
    }
}