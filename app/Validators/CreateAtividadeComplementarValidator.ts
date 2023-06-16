/* eslint-disable prettier/prettier */
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const actualYear = new Date().getFullYear()

export default class CreateAtividadeComplementarValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cargaHoraria: schema.number(),
    alunoId: schema.number(),
    tipoAtividadeId: schema.number(),
    descricaoAtividade: schema.string(),
    instituicao: schema.string(),
    anoConclusao: schema.number([rules.range(actualYear - 100, actualYear + 10)]),
    observacao: schema.string.optional(),
  })

  public messages: CustomMessages = {
    'required': 'O campo {{ field }} é obrigatório',
    'cargaHoraria.number': 'O campo carga horária deve ser um número',
    'alunoId.number': 'O campo aluno deve ser um número',
    'tipoAtividadeId.number': 'O campo tipo de atividade deve ser um número',
    'descricaoAtividade.string': 'O campo descrição da atividade deve ser uma string',
    'instituicao.string': 'O campo instituição deve ser uma string',
    'anoConclusao.number': 'O campo ano de conclusão deve ser um número',
    'observacao.string': 'O campo observação deve ser uma string',
    'anoConclusao.range':
      'O campo ano de conclusão deve ser um número entre {{ options.min }} e {{ options.max }}',
  }
}
