import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'alunos', column: 'email' }),
    ]),
    name: schema.string(),
    password: schema.string({ trim: true }, [rules.minLength(8)]),
    matricula: schema.number(),
    cpf: schema.string([
      rules.regex(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/g),
      rules.unique({ table: 'alunos', column: 'cpf' }),
    ]),
    telefone: schema.string([
      rules.regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/g),
      rules.unique({ table: 'alunos', column: 'telefone' }),
    ]),
    remember: schema.boolean.optional(),
  })

  public messages: CustomMessages = {
    'email.required': 'O campo email é obrigatório',
    'email.email': 'O campo email deve ser um email válido',
    'email.exists': 'O email informado não existe',
    'name.required': 'O campo nome é obrigatório',
    'password.required': 'O campo senha é obrigatório',
    'password.minLength': 'A senha deve ter no mínimo 8 caracteres',
    'password.confirmed': 'A confirmação de senha não confere',
    'matricula.required': 'O campo matrícula é obrigatório',
    'cpf.required': 'O campo cpf é obrigatório',
  }
}
