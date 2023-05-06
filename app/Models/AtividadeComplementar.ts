/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { AttachmentContract, attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import Aluno from './Aluno'
import TipoAtividade from './TipoAtividade'

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

  @hasOne(()=>Aluno,{
    foreignKey:'alunoId'
  })
  public aluno: HasOne<typeof Aluno>

  @hasOne(()=>TipoAtividade,{
    foreignKey:'tipoAtividadeId'
  })
  public tipoAtividade: HasOne<typeof TipoAtividade>

}
