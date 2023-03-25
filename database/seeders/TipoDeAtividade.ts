/* eslint-disable prettier/prettier */
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TipoAtividade from 'App/Models/TipoAtividade'

export default class extends BaseSeeder {
  public async run () {
    await TipoAtividade.createMany([
      {
descricao:'Monitoria'
      },
      {
        descricao:'Cursos'
      },
      {
        descricao:'Eventos'
      },
      {
        descricao:'Palestras'
      },
      {
        descricao:'Seminários'
      },
      {
        descricao:'Iniciação Científica'
      },
      {
        descricao:'PET'
      }
    ])
  }
}
