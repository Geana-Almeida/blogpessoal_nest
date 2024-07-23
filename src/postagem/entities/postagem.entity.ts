import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_postagens"})//ORM pega objeto e transforma em linguagem de banco de dados, e vice versa
export class Postagem{// Criando primaria autoincremental

    @PrimaryGeneratedColumn()   //id int AUTOINCREMENT
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear apenas espacos em branco.
    @IsNotEmpty()
    @Column({length: 100, nullable: false}) //definir o tamanho e n aceitar numero
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    texto: string;

    @UpdateDateColumn()
    data: Date;


}