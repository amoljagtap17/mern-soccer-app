import React, { useRef } from 'react'
import axios from 'axios'

export const PlayerForm = () => {
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')

  const submitPlayer = async event => {
    event.preventDefault()

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/players',
        formData
      )
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="row">
      <h1 className="center">Add a new player</h1>
      <form className="col s12" onSubmit={submitPlayer}>
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" ref={firstNameRef} type="text" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" ref={lastNameRef} type="text" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="phone" ref={phoneRef} type="text" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input-field col s6">
            <input id="email" ref={emailRef} type="text" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Add Player
        </button>
      </form>
    </div>
  )
}
