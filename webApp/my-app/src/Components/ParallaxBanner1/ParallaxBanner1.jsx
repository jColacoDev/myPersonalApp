import { ParallaxBanner } from "react-scroll-parallax";
import lxBg from "../../Images/lxBg.png";
import lxBg1 from "../../Images/lx1.png";
import lxBg2 from "../../Images/lx2.png";
import "./ParallaxBanner1.scss";

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
                <h1 className="headline white">jColaco.dev</h1>
                <p>Frontend developer</p>
            </div>
        ),
    };

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
