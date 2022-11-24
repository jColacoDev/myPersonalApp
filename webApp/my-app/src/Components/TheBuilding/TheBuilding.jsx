import "./TheBuilding.scss"
import React from 'react'
import TheRoom from "./TheRoom/TheRoom"
import TheRooftop from "./TheRooftop/TheRooftop"
import TheFloor from "./TheFloor/TheFloor"
import Sunset from "../Sunset/Sunset"
import HauntedHouse from "../HauntedHouse/HauntedHouse"
import LightSwitch from "../LightSwitch/LightSwitch"

export default function TheBuilding() {
  return (
    <main className="TheBuilding">
        <TheRooftop></TheRooftop>
        <LightSwitch></LightSwitch>
        <TheRoom></TheRoom>
        <TheFloor></TheFloor>
        <HauntedHouse></HauntedHouse>
        <Sunset></Sunset>
    </main>
  )
}
