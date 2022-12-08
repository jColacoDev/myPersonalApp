import Studio from "../Pages/Studio/Studio";
import CurriculumV from "../Pages/CurriculumV/CurriculumV";
import LandingPage from "../Pages/LandingPage/LandingPage";
import News from "../Pages/News/News";

const pagesData = [
    {
        path: "",
        element: <LandingPage />,
        title: "About me",
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
        title: "CV",
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
        path: "news",
        element: <News />,
        title: "News",
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
        title: "Studio",
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
