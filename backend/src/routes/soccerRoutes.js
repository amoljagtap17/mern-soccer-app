import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer
} from '../controllers'

export const routes = app => {
  app
    .route('/players')
    .get(getPlayers)
    .post(addNewPlayer)

  app
    .route('/players/:playerId')
    .get(getPlayerWithID)
    .put(updatePlayer)
}
