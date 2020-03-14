import React from 'react'

export const PlayerList = ({ players, updateCurrentPlayer }) => (
  <div>
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Players</h4>
        {players.map(player => (
          <a
            href="#!"
            className="collection-item"
            key={player._id}
            onClick={() => updateCurrentPlayer(player)}
          >
            {player.firstName} {player.lastName}
          </a>
        ))}
      </li>
    </ul>
  </div>
)
