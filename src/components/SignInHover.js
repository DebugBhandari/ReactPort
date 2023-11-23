import React from "react"

import './index.css'

export const SignInHover = () => {
  return (
    <div className="dropdown_menu">
      <button
        className="dropdown_menuItem"
      >
        Sign in with google
      </button>
      <button
        className="dropdown_menuItem"
      >
        Sign in with something
      </button>
    </div>
  )
}