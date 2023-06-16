/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import TipoAtividade from 'App/Models/TipoAtividade'
import { WORKLOAD_OPTIONS } from './constants'

Route.resource('login', 'LoginController').only(['index', 'store'])

Route.resource('register', 'RegistersController').only(['index', 'store'])

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('home')
  })

  Route.get('/tipo-atividade', 'TipoAtividadeController.index')

  Route.get('/tipo-atividade/create', async ({ view }) => {
    return view.render('tipoAtividade/create')
  })

  Route.get('/create', async ({ view }) => {
    const data = await TipoAtividade.all()

    const formatData = data.map((item) => ({
      value: item.tipoAtividadeId,
      text: item.descricao,
    }))

    return view.render('atividadeComplementar/create', {
      data: formatData,
      workload: WORKLOAD_OPTIONS,
    })
  })

  Route.post('/tipo-atividade', 'TipoAtividadeController.store')

  Route.delete('/tipo-atividade/:id', 'TipoAtividadeController.destroy')

  Route.get('/tipo-atividade/:id', 'TipoAtividadeController.show')

  Route.put('/tipo-atividade/:id', 'TipoAtividadeController.update')

  Route.delete('/logout', 'LoginController.destroy')

  Route.get('/tipo_atividade', 'TipoAtividadeController.index')

  Route.get('/atividade-complementar', 'AtividadeComplementarController.index')

  Route.group(() => {
    Route.get('/atividade-complementar/create', async ({ view }) => {
      return view.render('atividadeComplementar/create')
    })

    Route.post('/atividade-complementar', 'AtividadeComplementarController.store')

    Route.delete('/atividade-complementar/:id', 'AtividadeComplementarController.destroy')

    Route.get('/atividade-complementar/:id', 'AtividadeComplementarController.show')

    Route.put('/atividade-complementar/:id', 'AtividadeComplementarController.update')
  }).prefix('/atividade-complementar')
}).middleware(['auth:web'])
