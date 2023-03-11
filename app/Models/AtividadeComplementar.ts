import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AtividadeComplementar extends BaseModel {
  @column({ isPrimary: true })
  public atividadeComplementarId: number

  @column()
  public userId: number

  @column()
  public alunoId: number

  @column()
  public tipoatividadeid: number

  @column()
  public descricaoatividade: string

  @column()
  public cargahoraria: number

  @column()
  public instituicao: string

  @column()
  public anoconclusao: DateTime

  @column()
  public arquivo: string

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
