import { ParallaxBanner } from "react-scroll-parallax";
import "./ParallaxBanner1.scss";
import LogoJcolaco from "../LogoJcolaco/LogoJcolaco";

export const ParallaxBanner1 = () => {
    const background = {
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
        translateY: [0, 50],
        opacity: [0, 0],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
    };

    const headline = {
        translateY: [-10, 20],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset landingHeader ">
                <LogoJcolaco></LogoJcolaco>
            </div>
        ),
    };

    const lxBg= process.env.PUBLIC_URL + `/images/lxBg.png`
    const foreground = {
        image: lxBg,
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
    };

    const gradientOverlay = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />,
    };

    return (
        <ParallaxBanner
            layers={[background, headline, foreground, gradientOverlay]}
            className="ParallaxBanner1"
        />
    );
};
