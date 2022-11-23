import "./TheBuilding.scss"
import React from 'react'
import TheRoom from "../TheRoom/TheRoom"


export default function TheBuilding() {
  return (
    <main className="TheBuilding">

        <TheRoom></TheRoom>
        <TheRoom></TheRoom>
        <TheRoom></TheRoom>
    </main>
  )
}
