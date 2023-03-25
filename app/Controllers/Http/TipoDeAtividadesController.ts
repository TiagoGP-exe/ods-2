/* eslint-disable prettier/prettier */
 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TipoAtividade from "App/Models/TipoAtividade";


export default class TipoDeAtividadesController {
    public async index({request,response}:HttpContextContract){
        const data = await TipoAtividade.query()
        .select("tipoAtividadeId","descricao");

        response.ok({
            message: "Here the type of activity",
            data
        });
    }
    

   

}
