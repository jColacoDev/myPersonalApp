import React from 'react'
import { useLocation } from "react-router-dom";
import "./StickyNav.scss"
import "../../Animations/underlineText.scss";

export default function StickyNav({pagesData}) {
    // const [themeToggleSelector, setThemeToggleSelector] = React.useState();
    const [displayNav, setDisplayNav] = React.useState(true);
    const [linkIndex, setLinkIndex] = React.useState(0);
    const location = useLocation();
    const [scrollDir, setScrollDir] = React.useState("scrolling down");
    
    React.useLayoutEffect(() => {
        // setThemeToggleSelector(document.querySelector(".ThemeToggle"))
    }, []);

    
    React.useEffect(() => {
      const threshold = 100;
      let lastScrollY = window.pageYOffset;
      let ticking = false;
    
      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;
    
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
    
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
    
      window.addEventListener("scroll", onScroll);
    //   console.log(scrollDir); 
    setDisplayNav(scrollDir === "scrolling up" ? true : false);
      
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
    
    React.useLayoutEffect(() => {
        const themeToggleSelector = document.querySelector(".ThemeToggle");
        displayNav ? 
            themeToggleSelector.classList.remove("hideNav") :
            themeToggleSelector.classList.add("hideNav");
    }, [displayNav]);


    React.useLayoutEffect(() => {
        const isThePath = (element) => element.path === location.pathname.substring(1);
        setLinkIndex(pagesData.findIndex(isThePath));
    }, [location]);

    return (
        <nav className= {`stickyNav hover-underline07 ${displayNav ? "" : "hideNav"}`}>
            {pagesData[linkIndex]?.navLinks.map((navLink, i)=>
                <a key={i} href={navLink.ref}>{navLink.label}</a>    
            )}
        </nav>
  )
}
