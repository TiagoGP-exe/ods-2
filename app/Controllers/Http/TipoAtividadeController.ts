import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TipoAtividade from 'App/Models/TipoAtividade'
import TipoAtividadeValidator from 'App/Validators/TipoAtividadeValidator'
import { DateTime } from 'luxon'

export default class TipoAtividadeController {
  public async index({ view }: HttpContextContract) {
    const data = await TipoAtividade.all()

    const formatData = data.map((item) => {
      const createdAt = DateTime.fromObject(item.$attributes.created_at).toFormat('dd/MM/yyyy')
      const updatedAt = DateTime.fromObject(item.$attributes.updated_at).toFormat('dd/MM/yyyy')

      return {
        ...item.$attributes,
        createdAt,
        updatedAt,
      }
    })

    return view.render('tipoAtividade/index', { data: formatData })
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(TipoAtividadeValidator)

    try {
      await TipoAtividade.create(data)

      return response.redirect('/tipo-atividade')
    } catch (error) {
      return response.redirect('/')
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const tipoAtividade = await TipoAtividade.findOrFail(params.id)

    try {
      await tipoAtividade.delete()

      return response.redirect('/tipo-atividade')
    } catch (error) {
      return response.json({
        message: 'Error deleting type of activity',
        isDeleted: false,
      })
    }
  }

  public async show({ params, view }: HttpContextContract) {
    const tipoAtividade = await TipoAtividade.findOrFail(params.id)

    return view.render('tipoAtividade/edit', { id: params.id, descricao: tipoAtividade.descricao })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const data = await request.validate(TipoAtividadeValidator)

    console.log(data)

    const tipoAtividade = await TipoAtividade.findOrFail(params.id)

    tipoAtividade.descricao = data.descricao

    try {
      await tipoAtividade.save()

      return response.redirect('/tipo-atividade')
    } catch (error) {
      console.log(error)

      return response.redirect('/')
    }
  }
}
