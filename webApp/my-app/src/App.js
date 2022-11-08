import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Router from "./router/router";

function App() {
    return (
        <BrowserRouter>
            <ParallaxProvider>
                <Router />
            </ParallaxProvider>
        </BrowserRouter>
    );
}

export default App;
