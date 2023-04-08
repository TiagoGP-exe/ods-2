import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AtividadeComplementar from 'App/Models/AtividadeComplementar'
import CreateAtividadeComplementarValidator from 'App/Validators/CreateAtividadeComplementarValidator'

export default class AtividadeComplementarsController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await AtividadeComplementar.all()

      return response.ok({
        message: 'Listing of Atividade Complementar',
        data,
      })
    } catch (error) {
      return response.send({ message: error.message })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateAtividadeComplementarValidator)
    try {
      const data = await AtividadeComplementar.create(payload)

      return response.created({
        message: 'Atividade Complementar criada',
        data,
      })
    } catch (error) {
      return response.send({ message: error.message })
    }
  }
}
