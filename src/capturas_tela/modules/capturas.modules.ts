import { CapturasController } from './../controllers/capturas.controller';
import { CapturasService } from './../service/capturas.service';
import { Capturas } from './../entities/capturas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Capturas])],
    providers: [CapturasService],
    controllers: [CapturasController],
    exports: [TypeOrmModule]

})
export class CapturasModule{}