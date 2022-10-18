import { UsuarioModule } from './usuario/modules/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { CarrinhoModule } from './carrinho/modules/carrinho.module';
import { CapturasModule } from './capturas_tela/modules/capturas.modules';
import { Capturas } from './capturas_tela/entities/capturas.entity';
import { Carrinho } from './carrinho/entities/carrinho.entity';
import { PlataformaModule } from './plataforma/modules/plataforma.module';
import { Plataforma } from './plataforma/entities/plataforma.entity';
import { Genero } from './genero/entities/genero.entity';
import { GeneroModule } from './genero/modules/genero.module';
import { JogosModule } from './jogos/modules/jogos.module';
import { Jogos } from './jogos/entities/jogos.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '********',
    //   database: "db_gamedev",
    //   entities: [Jogos, Genero, Plataforma, Carrinho, Capturas, Usuario],
    //   synchronize: true
    // }),
    TypeOrmModule.forRoot({
      type:'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl:{
        rejectUnauthorized: false
      },
      autoLoadEntities: true,
      synchronize: true
    }),
    JogosModule,
    GeneroModule,
    PlataformaModule,
    CapturasModule,
    CarrinhoModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
