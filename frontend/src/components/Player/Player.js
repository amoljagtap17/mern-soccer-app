import React from 'react'

export const Player = ({ player }) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    strength,
    endurance,
    team
  } = player

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="soccer.jpeg" alt="Soccer player" />
            <span className="card-title">
              {firstName} {lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {phone} - Email: {email}
            </p>
            <p>
              Strength: {strength} - Endurance: {endurance}
            </p>
          </div>
          <div className="card-action">Team: {team}</div>
        </div>
      </div>
    </div>
  )
}
