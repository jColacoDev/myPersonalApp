import Studio from "../Pages/Studio/Studio";
import CurriculumV from "../Pages/CurriculumV/CurriculumV";
import LandingPage from "../Pages/LandingPage/LandingPage";

const pagesData = [
    {
        path: "",
        element: <LandingPage />,
        title: "landing page",
        navLinks: [
            {
                ref: "#AboutMe",
                label: "About me"
            },
            {
                ref: "#interests",
                label: "Interests"
            },
            {
                ref: "#contactMe",
                label: "Contact me"
            },
        ]
    },
    {
        path: "cv",
        element: <CurriculumV />,
        title: "cv",
        navLinks: [
            {
                ref: "#CV--btn",
                label: "CV"
            },
            {
                ref: "#PORTFOLIO--btn",
                label: "Portfolio"
            },
            {
                ref: "#PROJECTS--btn",
                label: "Projects"
            },
        ]
    },
    {
        path: "studio",
        element: <Studio />,
        title: "studio",
        navLinks: [
            {
                ref: "#studio",
                label: "Studio"
            },
            {
                ref: "#interests",
                label: "Interests"
            },
            {
                ref: "#projects",
                label: "Projects"
            },
        ]
    },
];

export default pagesData;
