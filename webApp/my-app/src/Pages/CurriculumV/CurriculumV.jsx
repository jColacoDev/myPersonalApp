import "./CurriculumV.scss";
import CV from "./../../Components/CV/CV";
import { Animated } from 'react-animated-css'

const CurriculumV = () => {
    return (
        <Animated 
                animationIn="fadeIn" 
                animationOut="fadeOut"
            >
            <div className="CurriculumV">
                <CV/>
            </div>
        </Animated>
    );
};

export default CurriculumV;
