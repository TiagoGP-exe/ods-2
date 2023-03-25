/* eslint-disable prettier/prettier */
import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateAtividadeComplementarValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
  carga_horaria: schema.number(),
  })

  
  public messages: CustomMessages = {}
}
