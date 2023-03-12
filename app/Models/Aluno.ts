import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public alunoId: number

  @column()
  public cpf: string

  @column()
  public name: string

  @column()
  public matricula: number

  @column()
  public telefone: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(aluno: Aluno) {
    if (aluno.$dirty.password) {
      aluno.password = await Hash.make(aluno.password)
    }
  }
}
