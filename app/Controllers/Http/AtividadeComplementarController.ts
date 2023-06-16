/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AtividadeComplementar from 'App/Models/AtividadeComplementar'
import CreateAtividadeComplementarValidator from 'App/Validators/CreateAtividadeComplementarValidator'
import UpdateAtividadeComplementarValidator from 'App/Validators/UpdateAtividadeComplementarValidator'

export default class AtividadeComplementarController {
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

  public async store({ request, response, auth }: HttpContextContract) {
    const body = await request.validate(CreateAtividadeComplementarValidator)

    try {
      await AtividadeComplementar.create({
        ...body,
        alunoId: auth.user?.alunoId,
        observacao: body.observacao || '',
      })

      return response.redirect('/')
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
    const payload = await request.validate(UpdateAtividadeComplementarValidator)

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
