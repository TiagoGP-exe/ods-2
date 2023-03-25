/* eslint-disable prettier/prettier */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import AtividadeComplementar from "App/Models/AtividadeComplementar";

export default class AtividadeComplementarsController {
    public async index({response}:HttpContext){
        try {
            const data = await AtividadeComplementar.query()
            .select('atividade_complementar_id','aluno_id','tipo_atividade_id','descricao_atividade','carga_horaria','instituicao','ano_conclusao','observacao','arquivo')
          

            response.ok({
                message:"Listing of Atividade Complementar",
                data
            })
        } catch (error) {
            
        }
    }
}
