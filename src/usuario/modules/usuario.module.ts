import { UsuarioController } from './../controllers/usuario.controller';
import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService],
    controllers: [UsuarioController],
    exports: [TypeOrmModule]

})
export class UsuarioModule{}