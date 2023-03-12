import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alunos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('aluno_id')
      table.string('cpf', 11).notNullable().unique()
      table.string('email', 200).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('name', 100).notNullable()
      table.integer('matricula').notNullable().unique()
      table.string('telefone', 20).notNullable()
      table.string('remember_me_token').nullable()

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
