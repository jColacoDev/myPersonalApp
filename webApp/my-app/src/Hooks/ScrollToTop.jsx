import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const topNavHeight = parseInt(getComputedStyle(document.body).getPropertyValue('--topNav-height'), 10);

    window.scrollTo(0, window.innerHeight - topNavHeight);
  }, [pathname]);

  return null;
}