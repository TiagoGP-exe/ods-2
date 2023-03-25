/* eslint-disable prettier/prettier */
 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TipoAtividade from "App/Models/TipoAtividade";


export default class TipoAtividadeController {
    public async index({response}:HttpContextContract){
        const data = await TipoAtividade.query()
        .select("tipo_atividade_id","descricao");

        response.ok({
            message: "Listing the type of activity",
            data
        });
    }
    

   

}