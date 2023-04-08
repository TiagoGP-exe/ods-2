/* eslint-disable prettier/prettier */
import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateAtividadeComplementarValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    carga_horaria: schema.number(),
    aluno_id: schema.number(),
    tipo_atividade_id: schema.number(),
    descricao_atividade: schema.string(),
    instituicao: schema.string(),
    ano_conclusao: schema.number(),
    observacao: schema.string.optional(),
  })

  public messages: CustomMessages = {
    'required': 'O campo {{ field }} é obrigatório',
    'carga_horaria.number': 'O campo carga horária deve ser um número',
    'aluno_id.number': 'O campo aluno deve ser um número',
    'tipo_atividade_id.number': 'O campo tipo de atividade deve ser um número',
    'descricao_atividade.string': 'O campo descrição da atividade deve ser uma string',
    'instituicao.string': 'O campo instituição deve ser uma string',
    'ano_conclusao.number': 'O campo ano de conclusão deve ser um número',
    'observacao.string': 'O campo observação deve ser uma string',
  }
}
