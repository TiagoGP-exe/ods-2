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
      return response.badRequest({ message: error.message })
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
      return response.badRequest({ message: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const atividade = await AtividadeComplementar.findOrFail(params.id)

    try {
      await atividade.delete()

      return response.redirect('/atividade-complementar')
    } catch (error) {
      return response.json({
        message: 'Erro ao excluir atividade complementar',
        isDeleted: false,
      })
    }
  }

  public async show({ params, view }: HttpContextContract) {
    const atividade = await AtividadeComplementar.findOrFail(params.id)

    return view.render('atividadeComplementar/edit', { atividade })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const payload = await request.validate(CreateAtividadeComplementarValidator)

    const atividade = await AtividadeComplementar.findOrFail(params.id)

    atividade.merge(payload)

    try {
      await atividade.save()

      return response.redirect('/atividade-complementar')
    } catch (error) {
      return response.redirect('/')
    }
  }
}
