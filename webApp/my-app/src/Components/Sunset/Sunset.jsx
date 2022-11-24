import "./Sunset.scss"
import React from 'react'
import { useSelector } from "react-redux";

export default function Sunset() {
    const sunset = useSelector((state) => state.sunset);

  return (
    <div className="Sunset">
        <div className={`sunset-sky ${sunset ? "active" : ""}`}>
        <div className="sunset-sky__sky"></div>
        <div className="bird--animate">
            <div className="bird">
            <div className="wing__left"></div>
            <div className="wing__right"></div>
            </div>
        </div>
        <div className="bird--animate">
            <div className="bird">
            <div className="wing__left"></div>
            <div className="wing__right"></div>
            </div>
        </div>
        <div className="sunset-sky__sun"></div>
        <div className="sunset-sky__clouds">
            <div className="sunset-sky__cloud">
            <div className="cloud__wisp"></div>
            <div className="cloud__wisp2"></div>
            <div className="cloud__wisp3"></div>
            <div className="cloud__wisp4"></div>
            </div>
            <div className="sunset-sky__cloud">
            <div className="cloud__wisp"></div>
            <div className="cloud__wisp2"></div>
            <div className="cloud__wisp3"></div>
            <div className="cloud__wisp4"></div>
            </div>
            <div className="sunset-sky__cloud">
            <div className="cloud__wisp"></div>
            <div className="cloud__wisp2"></div>
            <div className="cloud__wisp3"></div>
            <div className="cloud__wisp4"></div>
            </div>
            <div className="sunset-sky__cloud">
            <div className="cloud__wisp"></div>
            <div className="cloud__wisp2"></div>
            <div className="cloud__wisp3"></div>
            <div className="cloud__wisp4"></div>
            </div>
            <div className="sunset-sky__cloud">
            <div className="cloud__wisp"></div>
            <div className="cloud__wisp2"></div>
            <div className="cloud__wisp3"></div>
            <div className="cloud__wisp4"></div>
            </div>
            <div className="sunset-sky__cloud">
            <div className="cloud__wisp"></div>
            <div className="cloud__wisp2"></div>
            <div className="cloud__wisp3"></div>
            <div className="cloud__wisp4"></div>
            </div>
        </div>
        </div>
    </div>
  )
}
