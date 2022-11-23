import React from 'react'
import "./Studio.scss"
import FloatingSphere from "../../Components/FloatingSphere/FloatingSphere";
import Shinchan from "../../Components/Shinchan/Shinchan";
import Pikachu from "../../Components/Pikachu/Pikachu";
import ExhibitCaroussel from '../../Components/ExhibitCaroussel/ExhibitCaroussel';
import TheBuilding from '../../Components/TheBuilding/TheBuilding';

const Studio = () => {
    const exhibitFrames = [
        {
            element: <Pikachu />,
        },
        {
            element: <Shinchan />,
        },
        {
            element: <FloatingSphere />,
        }
    ];

    return (
        <div className="Studio">
            <ExhibitCaroussel exhibitFrames={exhibitFrames}></ExhibitCaroussel>
                <TheBuilding></TheBuilding>
        </div>
    );
};

export default Studio;
