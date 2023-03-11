import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'atividade_complementars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('atividade_complementar_id')
      table.integer('user_id').unsigned().references('users.id')
      table.integer('aluno_id').unsigned().references('alunos.aluno_id')
      table.integer('tipo_atividade_id').unsigned().references('tipo_atividades.tipo_atividade_id')
      table.string('descricao_atividade', 200).notNullable()
      table.integer('carga_horaria').notNullable()
      table.string('instituicao', 100).notNullable()
      table.integer('ano_conclusao').notNullable()
      table.binary('arquivo').notNullable()
      table.string('observacao', 200).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
