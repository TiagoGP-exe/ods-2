import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.exists({ table: 'alunos', column: 'email' }),
    ]),
    password: schema.string({}, [rules.minLength(8), rules.maxLength(27)]),
    remember: schema.boolean.optional(),
  })

  public messages: CustomMessages = {
    'email.required': 'O campo de email é obrigatório',
    'email.email': 'O campo de email deve ser um email válido',
    'email.exists': 'O email informado não existe',
    'password.required': 'O campo de senha é obrigatório',
    'password.minLength': 'A senha deve ter no mínimo 8 caracteres',
    'password.maxLength': 'A senha deve ter no máximo 27 caracteres',
  }
}
