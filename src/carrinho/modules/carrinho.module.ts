import { CarrinhoController } from './../controllers/carrinho.controller';
import { CarrinhoService } from './../service/carrinho.service';
import { Carrinho } from './../entities/carrinho.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Carrinho])],
    providers: [CarrinhoService],
    controllers: [CarrinhoController],
    exports: [TypeOrmModule]

})
export class CarrinhoModule{}