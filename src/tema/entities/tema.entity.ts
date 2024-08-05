import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_tema"})//ORM pega objeto e transforma em linguagem de banco de dados, e vice versa
export class Tema{// Criando primaria autoincremental

    @PrimaryGeneratedColumn()   //id int AUTOINCREMENT
    @ApiProperty()   
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear apenas espacos em branco.
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) //definir o tamanho e n aceitar numero
    @ApiProperty()   
    descricao: string;

    @ApiProperty()   
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
}