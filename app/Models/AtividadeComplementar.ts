import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { AttachmentContract, attachment } from '@ioc:Adonis/Addons/AttachmentLite'

export default class AtividadeComplementar extends BaseModel {
  @column({ isPrimary: true })
  public atividadeComplementarId: number

  @column()
  public alunoId: number

  @column()
  public tipoAtividadeId: number

  @column()
  public descricaoAtividade: string

  @column()
  public cargaHoraria: number

  @column()
  public instituicao: string

  @column()
  public anoConclusao: number

  @attachment({ preComputeUrl: true })
  public arquivo: AttachmentContract

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
