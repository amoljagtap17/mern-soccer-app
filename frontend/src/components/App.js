import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { PlayerList, Player, PlayerForm } from './Player'

const App = () => {
  const [players, setPlayers] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState({})

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/players')

        setPlayers(data)
      } catch (error) {
        console.log(error)
        setPlayers([])
      }
    }

    getPlayers()
  }, [])

  const updateCurrentPlayer = player => setCurrentPlayer(player)

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">Menu</div>
      </div>
      <div className="row">
        <div className="col s3">
          <PlayerList
            players={players}
            updateCurrentPlayer={updateCurrentPlayer}
          />
        </div>
        <div className="col s9">
          <Player />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  )
}

export default App
