import About from "../Pages/About/About";
import CurriculumV from "../Pages/CurriculumV/CurriculumV";
import LandingPage from "../Pages/LandingPage/LandingPage";

const pagesData = [
    {
        path: "",
        element: <LandingPage />,
        title: "landing page",
    },
    {
        path: "cv",
        element: <CurriculumV />,
        title: "cv",
    },
    {
        path: "about",
        element: <About />,
        title: "about",
    },
];

export default pagesData;
