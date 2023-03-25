/* eslint-disable prettier/prettier */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import AtividadeComplementar from "App/Models/AtividadeComplementar";
import CreateAtividadeComplementarValidator from "App/Validators/CreateAtividadeComplementarValidator";

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
            response.send({message: error.message})
        }
    }

    public async store ({request,response}:HttpContext){
        try {
            const payload = await request.validate(CreateAtividadeComplementarValidator);
            const data = await AtividadeComplementar.create(payload);

            response.created({
                message:"Atividade Complementar criada", data
            })
        } catch (error) {
            response.send({message: error.message})
        }
    }
}
