//Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from './footer.module.scss'; 
import GlowButton from "../GlowButton/GlowButton";

export default function Footer() {

    function handleTopClick(){
        window.scrollTo(0,0);
    }
    return (
        <footer className={styles.appFooter}>
            <article>
                <h2>About me</h2>
                <Link to="/#contactMe">Contact me</Link>
                <Link to="/#interests">Interests</Link>
            </article>
            <article>
                <h2>Curriculum Vitae</h2>
                <Link to="#top">CV</Link>
                <Link to="#top">Portfolio</Link>
                <Link to="#top">Projects</Link>
            </article>
            <article>
                <Link onClick={handleTopClick}>
                    <figure>
                        <GlowButton></GlowButton>
                    </figure>
                    <figcaption>
                        All Rights Reserved <br/>
                        © {new Date().getFullYear()} jColaco.dev<br/>
                    </figcaption>
                </Link>
            </article>
        </footer>
    );
}