import React from 'react'
import "./Studio.scss"
import TheBuilding from '../../Components/TheBuilding/TheBuilding';
import Computer3d from '../../Components/Computer3d/Computer3d';
import WIndows98 from '../../Components/WIndows98/WIndows98';


const Studio = () => {

    return (
        <div className="Studio">
            <TheBuilding></TheBuilding>
        <Computer3d></Computer3d>
        <WIndows98></WIndows98>

        </div>
    );
};

export default Studio;
