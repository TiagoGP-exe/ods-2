import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class RegistersController {
  public async index({ view }: HttpContextContract) {
    return view.render('register')
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const { remember, ...data } = await request.validate(RegisterValidator)

    const aluno = await Aluno.create(data)

    await auth.use('web').login(aluno, remember)

    return response.redirect('/')
  }
}
