import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";
import Theme from "../Theme";
import { ParallaxBanner1 } from "./../Components/ParallaxBanner1/ParallaxBanner1";
import MenuButton from "./../Components/MenuButton/MenuButton";
import DayNight1 from "./../Components/DayNight1/DayNight1";
import ThemeToggle from "./../Components/ThemeToggle/ThemeToggle";
import ScrollToTop from "../Hooks/ScrollToTop";
import "./routerPages.scss"
import StickyNav from "../Components/StickyNav/StickyNav";
import Footer from "../Components/Footer/Footer";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });
    const theme = useSelector((state) => state.theme);

    return (
        <>
            <Theme/>
            <ScrollToTop />
            <span id="top" />

            <ThemeToggle themeToggle={theme}></ThemeToggle>
            <MenuButton></MenuButton>

            <div className="marginMenu">
                <div id="landingParallax">
                    <DayNight1 theme={theme}></DayNight1>
                    <ParallaxBanner1 />
                </div>
                <StickyNav pagesData={pagesData}/>
                    <div id="RouteStart">
                        <Routes>{pageRoutes}</Routes>
                    </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Router;
