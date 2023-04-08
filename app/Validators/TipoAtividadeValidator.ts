import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TipoAtividadeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    descricao: schema.string({ trim: true }, [
      rules.unique({ table: 'tipo_atividades', column: 'descricao' }),
      rules.minLength(3),
      rules.maxLength(255),
    ]),
  })

  public messages: CustomMessages = {
    'required': 'O campo {{ field }} é obrigatório',
    'descricao.string': 'O campo descrição deve ser uma string',
    'descricao.minLength': 'O campo descrição deve ter no mínimo 3 caracteres',
    'descricao.maxLength': 'O campo descrição deve ter no máximo 255 caracteres',
    'descricao.unique': 'O campo descrição deve ser único',
  }
}
