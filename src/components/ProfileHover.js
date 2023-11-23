import React from "react"

import './index.css'

export const ProfileHover = () => {
  return (
    <div className="dropdown_menu">
      <button
        className="dropdown_menuItem"
      >
        My Profile
      </button>
      <button
        className="dropdown_menuItem"
      >
        My Orders
      </button>
      <button
        className="dropdown_menuItem"
      >
        My Payment
      </button>
      <button className="sign-out">
        Sign Out
      </button>
    </div>
  )
}