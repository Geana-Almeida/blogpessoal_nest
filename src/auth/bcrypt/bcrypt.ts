import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

@Injectable()
export class Bcrypt{
    async criptografarSenha(senha: string):Promise<string>{
        let saltos: number = 10

        return await bcrypt.hash(senha, saltos)

    }

    async compararSenhas(senhaDigitada: string , senhaBanco: string ): Promise<boolean>{

        return await bcrypt.compareSync(senhaDigitada, senhaBanco);
//Tem que ser na ordem que esta pois a primeira parte irá comparar a senha sem estar criptada e a segunda é a senha que ta criptografada que ta no banco de dados
    }
}
