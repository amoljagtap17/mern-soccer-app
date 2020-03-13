import { addNewPlayer } from '../controllers'

export const routes = app => {
  app.route('/players').post(addNewPlayer)
}
