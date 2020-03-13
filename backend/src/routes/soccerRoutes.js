import { addNewPlayer, getPlayers } from '../controllers'

export const routes = app => {
  app
    .route('/players')
    .get(getPlayers)
    .post(addNewPlayer)
}
