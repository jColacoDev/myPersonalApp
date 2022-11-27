import "./TheBuilding.scss"
import React from 'react'
import TheRoom from "./TheRoom/TheRoom"
import TheRooftop from "./TheRooftop/TheRooftop"
import Sunset from "../Sunset/Sunset"
import LightSwitch from "../LightSwitch/LightSwitch"
import GraffitiColorFont from "../GraffitiColorFont/GraffitiColorFont"
import Art3dGallery from "../Art3dGallery/Art3dGallery"
export default function TheBuilding() {
    let changePerspective = false;
    const firstWallGraffiti = "jColaco .dev graffitti CSS artWork";

  return (
    <main className="TheBuilding">
        <div>
            <TheRooftop changePerspective={changePerspective}></TheRooftop>
            <LightSwitch></LightSwitch>
        </div>
        <section className="divWall">
            <GraffitiColorFont quote={firstWallGraffiti}></GraffitiColorFont>
        </section>
        <TheRoom changePerspective={changePerspective}></TheRoom>
        <section className="divWall">

        </section>
        <Art3dGallery></Art3dGallery>
        <Sunset></Sunset>
    </main>
  )
}
