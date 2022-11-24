import "./TheBuilding.scss"
import React from 'react'
import TheRoom from "./TheRoom/TheRoom"
import TheRooftop from "./TheRooftop/TheRooftop"
import TheFloor from "./TheFloor/TheFloor"
import Sunset from "../Sunset/Sunset"

export default function TheBuilding() {
  return (
    <main className="TheBuilding">
        <TheRooftop></TheRooftop>
        <TheRoom></TheRoom>
        <TheFloor></TheFloor>
        <Sunset></Sunset>
    </main>
  )
}
