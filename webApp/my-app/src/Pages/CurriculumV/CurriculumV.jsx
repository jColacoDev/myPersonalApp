import "./CurriculumV.scss";
import CV from "./../../Components/CV/CV";
import { Animated } from 'react-animated-css'
import PDFmaker from "../../Components/PDFmaker/PDFmaker";

const CurriculumV = () => {
    return (
        <Animated 
                animationIn="fadeIn" 
                animationOut="fadeOut"
            >
        <div className="CurriculumV">
            <CV/>
            <PDFmaker></PDFmaker>
        </div>
        </Animated>
    );
};

export default CurriculumV;
