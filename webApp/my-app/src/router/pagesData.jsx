import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";

const pagesData = [
    {
        path: "",
        element: <LandingPage />,
        title: "landing page",
    },
    {
        path: "home",
        element: <Home />,
        title: "home",
    },
    {
        path: "about",
        element: <About />,
        title: "about",
    },
];

export default pagesData;
