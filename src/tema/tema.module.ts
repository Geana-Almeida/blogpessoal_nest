import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./service/tema.service";
import { TemaController } from "./controller/tema.controller";
import { Postagem } from "../postagem/entities/postagem.entity";
import { PostagemService } from "../postagem/services/postagem.service";


@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule],
})
export class TemaModule {}