import { addNewPlayer, getPlayers, getPlayerWithID } from '../controllers'

export const routes = app => {
  app
    .route('/players')
    .get(getPlayers)
    .post(addNewPlayer)

  app.route('/player/:playerId').get(getPlayerWithID)
}
