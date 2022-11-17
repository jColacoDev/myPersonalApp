import React from 'react'
import { useLocation } from "react-router-dom";
import "./CV.scss";
import pagesData from '../../router/pagesData';

export default function CV() {
    const location = useLocation();
    const [hash, setHash] = React.useState("");

    React.useEffect(() => {
        setHash(location.hash);
    }, [location]);
    
    React.useEffect(() => {
        if(hash){
            handleClick_btn(document.querySelector(hash).closest("li"));
        }
    }, [hash]);

    const navButtons = [
        { state: "active", title: pagesData[1].navLinks[0].label, ref: pagesData[1].navLinks[0].ref },
        { state: "", title: pagesData[1].navLinks[1].label, ref: pagesData[1].navLinks[1].ref },
        { state: "", title: pagesData[1].navLinks[2].label, ref: pagesData[1].navLinks[2].ref },
    ];
    
    function handleLinkClick ({currentTarget}) {
        location.pathname = `${currentTarget.href}`
        return false;
    }

    function handleClick_btn (currentTarget) {
        const   pages = document.querySelectorAll(".page"),
                navLis = document.querySelectorAll(".navbar li");
        const btnKey = currentTarget.dataset.key.toLowerCase();

        for(let ele of navLis){
            ele.classList.remove("active");
        }
        for(let ele of pages){
            ele.classList.remove("active");
        }

        currentTarget.classList.add("active");
        document.querySelector(`.page--${btnKey}`).classList.add("active");
    }

return (
    <div className="CV">
    <div className="site-wrapper">
    <div className="cv">
        <header className="cv__head">
            <section className="user">
                <section className="user-media">
                    <article className="user__media user__media--hero">
                        <div className="media">
                            <div className="media__wrapper">
                                <img className="media__image" src="https://chmood.github.io/img/nico2.jpg" alt="João Colaço" />
                            </div>
                        </div>
                    </article>
                </section>
                <section className="user-title section ">
                    <h1 className="user__name name">
                        <span className="name__first-name">João</span>
                        <span className="name__last-name">Colaço</span>
                    </h1>
                    <h2 className="user__job">Web developer<br/>Front-end expert<br/>Back-end connoisseur</h2>
                </section>

                <div className="user__metas">

                    <section className="user__social section">
                        <h2 className="section__title--simple">Social</h2>

                        <article className="user__socials socials">
                            <a className="social social--twitter" 
                                href="https://www.linkedin.com/in/jcolacodev/" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/linkedin.png")} alt="" />
                                <span>linkedin.com/jColacoDev</span>
                            </a>
                            <a className="social social--codepen" href="https://github.com/jColacoDev" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/github.png")} alt="" />
                                <span>github.com/jColacoDev</span>
                            </a>
                            <a className="social social--github" href="https://codepen.io/jcolacodev" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/codepen.png")} alt="" />
                                <span>codepen.io/jColacoDev</span>
                            </a>
                            <a className="social social--github" href="https://forum.arduino.cc/u/jcolaco/" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/arduino.png")} alt="" />
                                <span>arduino.com/jColaco</span>
                            </a>
                        </article>
                    </section>

                    <section className="user__contact section">
                        <h2 className="section__title--simple">Contact</h2>

                        <article className="contact">
                            <span className="contact__mail">
                                <a href="mailto:me@jColaco.dev">me@jColaco.dev</a>
                            </span>
                            <div className="contact__adress adress">
                                <span className="adress__city">Lisboa</span>
                                <br/>
                                <span className="adress__country">Portugal</span>
                            </div>
                        </article>
                    </section>

                </div>
            </section>
        </header>

        <main className="cv__main">
            <section className="section section--nav">
                <div className="navbar">
                    <ul className="nav">
                    {navButtons.map((item) => 
                        <li key={item.title} 
                            id={`${item.title}--btn`}
                            data-key={item.title}
                            className={item.state}>
                            <a onClick={handleLinkClick} href={item.ref} className='cv--link'>
                                <button id={item.ref.substring(1)} className="btn--cv">
                                    {item.title}
                                </button>
                            </a>
                        </li>
                    )}
                    </ul>
                </div>
            </section>
            <div className="page page--cv active">

                <section className="section section--secondary section--summary">
                    <div className="section__body">
                        <article>
                            <h3>UI/UX design</h3>
                            <p>Interfaces, prototypes, guides de style</p>
                        </article>
                        <article>
                            <h3>Intégration</h3>
                            <p>Responsive & mobile-first, accessibilité, SEO, performance</p>
                        </article>
                        <article>
                            <h3>Développement JS</h3>
                            <p>Applications web progressives, mobile et desktop</p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--primary section--tools">
                    <h2 className="section__title section__title--white">Outils</h2>
                    <div className="section__body">
                        <article>
                            <h3>Technos</h3>
                            <p>
                                <strong>CSS3 / Sass</strong> (méthode BEM), <strong>Bootstrap</strong> ou framework custom, Flexbox / CSS Grid, SVG. theming <strong>Wordpress</strong> (et WooCommerce, Drupal, Prestashop), templates <strong>PHP</strong> et Smarty / Twig / Blade. <strong>jQuery</strong>, <strong>ES6</strong>, <strong>Vue JS</strong>, ElectronJS, Canvas, WebGL, WebAudio et d'autres API <strong>HTML5</strong>.
                            </p>
                        </article>
                        <article>
                            <h3>Workflow</h3>
                            <p>Build front-end
                                <strong>Webpack</strong> et Gulp (Browsersync, PostCSS, Babel), <strong>Node</strong> et NPM, versioning <strong>Git</strong> (gitflow), Trello / Redmine, <strong>méthodes agiles</strong> (Scrum/Kanban), administration système et workstation <strong>Linux</strong>. <strong>Télé-travail</strong> régulier.
                            </p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--white section--timeline">
                    <h2 className="section__title">Expérience</h2>
                    <div className="section__body">
                        <div className="timeline">

                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020
                                    </time>
                                    <span>Dev expert front-end</span>
                                    <span>(
                                        <a href="http://diatem.net">Diatem</a> à&nbsp;Strasbourg)</span>
                                </h3>
                                <p>Intégration CSS, développement JS, Symfony, WordPress, Drupal, Twig, Webpack.</p>
                                <p>Optimisation mobile, ergonomie et UX, accessibilité et SEO, performance.
                                </p>
                            </article>

                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">2014 - 2019</time>
                                    <span>Lead intégrateur</span>
                                    <span>(
                                        <a href="http://webcd.fr">agence Webcd</a> à&nbsp;Obernai)</span>
                                </h3>
                                <p>Conception, intégration et contribution à de nombreux sites web, ecommerces, applications web et
                                    extranets
                                    <em>(visibles sur <a href="#portfolio">mon portfolio</a>).</em>
                                </p>
                                <p>Architecture, développement et maintenance de la partie front de nos CMS. Modernisation des process et des outils (framework Sass/Bootstrap et starter thème WordPress maison).</p>
                                <p>Rédaction de documentation interne, formation des équipes. Délégué du personnel et évangéliste des bonnes pratiques et de la qualité web.</p>
                            </article>

                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">2009 - 2013</time>
                                    <span>Développeur-intégrateur web</span>
                                    <span>(Freelance)</span>
                                </h3>
                                <p>Conception, réalisation et maintenance de sites internet pour des TPE/PME.</p>
                            </article>

                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">2008</time>
                                    <span>BTS gestion des ressources informatiques</span>
                                    <span>(TSGRI)</span>
                                </h3>
                                <p>Diplôme d'état de niveau III (Bac+2)
                                    <em>AFPA de Strasbourg</em>
                                </p>
                            </article>
                            <svg className="timeline__icon timeline__icon--top">
                                <use xlinkHref="#timeline-top" />
                            </svg>
                            <svg className="timeline__icon timeline__icon--bottom">
                                <use xlinkHref="#timeline-bottom" />
                            </svg>
                        </div>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--secondary section--profile">
                    <h2 className="section__title section__title--primary">Profil</h2>
                    <div className="section__body grid grid--50">
                        <article>
                            <h3>Geek</h3>
                            <p>Passionné depuis l'âge de 11 ans. Apprentissage perpétuel, veille technique active et constante.</p>
                        </article>
                        <article>
                            <h3>Team</h3>
                            <p>Épanoui dans le travail d'équipe et impliqué dans la vie de l'entreprise.</p>
                        </article>
                        <article>
                            <h3>Com</h3>
                            <p>Aisance à l'oral et à l'écrit. Très bon niveau en anglais courant et technique.</p>
                        </article>
                        <article>
                            <h3>Hobbies</h3>
                            <p>Ma gratte 🎸, la VR 😎, les romans de SF 👽, localhost:8080 🖥, mes amis et ma famille ❤️.</p>
                        </article>
                    </div>
                </section>
            </div>
            <div className="page page--portfolio">

                <section className="section section--secondary section--summary">
                    <div className="section__body">
                        <article>
                            <h3>Sites clients</h3>
                            <p>Mes derniers projets</p>
                        </article>
                        <article>
                            <h3>Multi-sites</h3>
                            <p>Socles front-end</p>
                        </article>
                        <article>
                            <h3>Divers</h3>
                            <p>Frameworks, thèmes, applications et jeux</p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--white section--portfolio-1">
                    <h2 className="section__title section__title--primary">Sites client</h2>
                    <div className="section__body">
                        <div className="grid grid--50">
                            <article>
                                <h3>WordPress</h3>
                                <ul className="no-bullet">
                                    <li>
                                        <a href="https://www.qwesta-builder.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.qwesta-builder.fr/wp-content/themes/lightwords/dist/img/favicon/favicon.ico" alt=""/>
                                            Qwesta
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.the-disrupt-lab.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.the-disrupt-lab.com/wp-content/themes/lightwords/dist/img/favicon/favicon.ico" alt=""/>
                                            The disrupt lab
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.echodalsace.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.echodalsace.com/public/donnees/cms/sources/favicons/favicon-32x32.png" alt=""/>
                                            L'Écho d'Alsace
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://schaal-chocolatier.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://schaal-chocolatier.com/wp-content/uploads/2019/10/cropped-favicon-SCHAAL_version1-32x32.png" alt=""/>
                                            Chocolats Schaal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.monfournil.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.monfournil.fr/wp-content/uploads/2016/08/cropped-logo_monfournil_2-32x32.jpg" alt=""/>
                                            monfournil.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.babychou.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.babychou.com/wp-content/uploads/2016/08/cropped-picto-uniquement-1-32x32.jpg" alt=""/>
                                            babychou.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.krautergersheim.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.krautergersheim.com/wp-content/uploads/2018/07/cropped-favicon-32x32.png" alt=""/>
                                            Mairie de Krautergersheim
                                        </a>
                                    </li>
                                </ul>
                                <h3>WooCommerce</h3>
                                <ul className="no-bullet">
                                    <li>
                                        <a href="http://www.sebastien-gillmann.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.sebastien-gillmann.com/wp-content/themes/lightwords/dist/img/favicon/favicon-32x32.png" alt=""/>
                                            sebastien-gillmann.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.fortal.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.fortal.fr/wp-content/themes/lightwords/dist/img/favicon/favicon-32x32.png" alt=""/>
                                            fortal.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.edel.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.edel.fr/wp-content/uploads/2018/12/cropped-favicon-32x32.png" alt=""/>
                                            edel.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.ateliers-marc-k.net/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.ateliers-marc-k.net/wp-content/uploads/2018/06/favicon-ateliers-marc-K-100x100.png" alt=""/>
                                            Ateliers Marc K.
                                        </a>
                                    </li>
                                </ul>
                            </article>

                            <article>
                                <h3>CMS propriétaire</h3>
                                <ul className="no-bullet">
                                    <li>
                                        <a href="https://www.obernai.shop/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.obernai.shop/images/front/favicons/favicon-32x32.png" alt=""/>
                                            Alsace Shopping
                                        </a> (Laravel)
                                    </li>
                                    <li>
                                        <a href="http://www.petite-entreprise.net/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.petite-entreprise.net/images-donnees/cms/sources/favicons/favicon-32x32.png" alt=""/>
                                            petite-entreprise.net
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.plus-que-pro.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.plus-que-pro.fr/public/donnees/cms/sources/favicons/favicon-32x32.png" alt=""/>
                                            plus-que-pro.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.toute-la-franchise.com/" target="_blank" rel="noreferrer">
                                            <img className="favicon favicon--inline" src="https://www.toute-la-franchise.com/images/ipd/icones/favicon.ico" alt=""/>
                                            toute-la-franchise.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.camif-habitat.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon favicon--inline" src="https://cdn.camif-habitat.fr/Content/Images/Favicon/favicon.ico" alt=""/>
                                            camif-habitat.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.chalet-armanaz.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.chalet-armanaz.fr/public/donnees/cms/sources/favicons/favicon-32x32.png" alt=""/>
                                            chalet-armanaz.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.centre-affaires-lyon-monts-d-or.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.centre-affaires-lyon-monts-d-or.fr/public/donnees/cms/sources/favicons/favicon-32x32.png" alt=""/>
                                            centre-affaires-lyon-monts-d-or.fr
                                        </a>
                                    </li>
                                </ul>
                                <h3>Prestashop</h3>
                                <ul className="no-bullet">
                                    <li>
                                        <a href="https://www.oppermann.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.oppermann.fr/img/favicon.ico?1537456986" alt=""/>
                                            oppermann.fr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.clic-perruques.fr/" target="_blank" rel="noreferrer">
                                            <img className="favicon" src="https://www.clic-perruques.fr/img/favicon.ico?1572527100" alt=""/>
                                            clic-perruques.fr
                                        </a>
                                    </li>
                                </ul>
                            </article>
                            <p style={{textAlign: "right", marginTop: "-1.5rem"}}><em>
                                    &hellip;ainsi que la plupart des <a href="https://www.webcd.fr/tous-les-projets/" target="_blank" rel="noreferrer">réalisations de Webcd</a>.
                                </em></p>
                        </div>
                    </div>
                </section>

                <section className="section section--primary section--portfolio-2">
                    <h2 className="section__title">Multi-sites</h2>
                    <div className="section__body" style={{paddingBottom: "1.6rem"}}>
                        <p>
                            <em>Les multi-sites dont j'ai conçu le socle front-end, intégrés en masse par d'autres que moi</em>
                        </p>
                        <h3 style={{color: "white"}}>
                            Plus que PRO
                        </h3>
                        <p><a href="http://www.plus-que-pro.fr/adherents/" target="_blank" rel="noreferrer">Plus de 1500 mini-sites d'adhérents</a> (par exemple <a href="http://www.armony-cuisines.fr/" target="_blank" rel="noreferrer">armony-cuisines.fr</a>, <a href="http://www.mactbox.fr/">mactbox.fr</a> ou <a href="http://www.ecole-grandjean.fr/" target="_blank" rel="noreferrer">l'école Grandjean</a>)</p>
                        <br/>
                        <p></p>
                        <h3 style={{color: "white"}}>Toute La Franchise</h3>
                        <p>4 portails et 19 mini-sites ( <a href="http://www.franchise-service.fr/" target="_blank" rel="noreferrer">franchise-service.fr</a>, <a href="http://www.franchise-commerce.fr/">franchise-commerce.fr</a>,
                            <a href="http://www.franchise-habitat.fr/" target="_blank" rel="noreferrer">franchise-habitat.fr</a> et <a href="http://www.masterfranchise.fr/" target="_blank" rel="noreferrer">masterfranchise.fr</a>,
                            ainsi que <a href="http://www.franchise-restauration.fr" target="_blank" rel="noreferrer">restauration</a>, <a href="http://www.franchise-batiment-renovation.fr" target="_blank" rel="noreferrer">batiment-renovation</a>,
                            <a href="http://www.franchise-d-agence-immobiliere.fr" target="_blank" rel="noreferrer">agence-immobiliere</a> , etc…)
                        </p>
                    </div>
                </section>
            </div>
            <div className="page page--projects">
                <section className="section section--secondary section--summary">
                    <div className="section__body">
                        <article>
                            <h3>Outils open-source</h3>
                            <p>Ma trousse à outil professionnelle</p>
                        </article>
                        <article>
                            <h3>Applications web</h3>
                            <p>Developpement JS sur-mesure</p>
                        </article>
                        <article>
                            <h3>Jeux 2D & 3D</h3>
                            <p>Do you speak pixel?</p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>
                <section className="section section--white section--projects-1">
                    <h2 className="section__title section__title--primary">Frameworks &amp; thèmes</h2>
                    <div className="section__body">
                        <p><em>Mes outils open-source, exploités en production pour nos clients</em></p>
                        <ul>
                            <li><a href="https://github.com/Chmood/quasu" target="_blank" rel="noreferrer">Quasu</a> : starter app pour VueJS / Quasar Framework (<a href="https://www.qwesta-builder.fr/" target="_blank" rel="noreferrer">Qwesta</a>).</li>
                            <li><a href="https://github.com/webcd/lightwords" target="_blank" rel="noreferrer">Lightwords</a> : starter theme WordPress. Pour sites premium / custom. Basé sur Timber / Twig</li>
                            <li><a href="https://github.com/Chmood/cyanid" target="_blank" rel="noreferrer">Cyanid</a> : grille CSS Flexbox responsive. Utilisé en production sur des dizaines de sites clients.</li>
                            <li><a href="https://github.com/webcd/batstroop" target="_blank" rel="noreferrer">Batstroop</a> : framework front-end, en remplacement de Bootstrap (Flexbox, Gulp)</li>
                        </ul>
                    </div>
                </section>
                <section className="section section--primary section--projects-2">
                    <h2 className="section__title section__title--secondary">Applications web</h2>
                    <div className="section__body">
                        <p><em>Les applis web que j'ai développées</em></p>
                        <ul>
                            <li><a href="https://www.lol-item-sets-builder.com/" target="_blank" rel="noreferrer">LoL Item Set Builder</a>, aide au jeu League of Legends
                                <span className="pill">perso</span>
                            </li>
                            <li>Dashboard pour les coachs Plus que PRO ( <a href="http://codepen.io/Chmood/full/NdXzNM/" target="_blank" rel="noreferrer">prototype
                                    Codepen</a>) <span className="pill">privé</span></li>
                            <li>Dashboard de résultats de sondage interne ( <a href="http://codepen.io/Chmood/full/RWQgrp/" target="_blank" rel="noreferrer">prototype
                                    Codepen</a>) <span className="pill">privé</span></li>
                            <li>Appli mobile des commerciaux Plus que PRO (avec Appccelerator) <span className="pill">privé</span></li>
                            <li><a href="http://makemyjuice.fr/" target="_blank" rel="noreferrer">MakeMyJuice</a>, un calculateur de liquide pour e-cigarette <span className="pill">old</span>
                                <span className="pill">perso</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="section section--secondary section--projects-3">
                    <h2 className="section__title section__title--white">Jeux</h2>
                    <div className="section__body">
                        <p><em>Quel dev n'aime pas coder ça&nbsp;? (voir mon <a href="https://github.com/Chmood" target="_blank" rel="noreferrer">github</a> pour les
                                sources)</em></p>
                        <ul>
                            <li><a href="https://chmood.github.io/hexgame/" target="_blank" rel="noreferrer">Hexgame</a>, un clone de Advance wars sous WebGL/<a href="https://threejs.org/" target="_blank" rel="noreferrer">ThreeJS</a> et <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a><span className="pill">perso</span></li>
                            <li><a href="http://chmood.github.io/shmup/dist/" target="_blank" rel="noreferrer">SHMUP</a>, un shoot-em-up avec <a href="http://impactjs.com/" target="_blank" rel="noreferrer">Impact</a><span className="pill">perso</span></li>
                            <li><a href="https://github.com/Chmood/rotlike" target="_blank" rel="noreferrer">Rot-like</a>, un rogue-like avec <a href="http://ondras.github.io/rot.js/hp/" target="_blank" rel="noreferrer">rot.js</a><span className="pill">perso</span></li>
                            <li><a href="http://chmood.github.io/cannon-racer/src/" target="_blank" rel="noreferrer">Cannon Racer</a>, Un jeu de course 3D avec Three.js et <a href="http://www.cannonjs.org/" target="_blank" rel="noreferrer">Cannon.js</a> <span className="pill">perso</span></li>
                        </ul>
                    </div>
                </section>
            </div>

        </main>
        
        <footer className="cv__foot">
            <article className="copyright">
                Version web de ce CV :
                <a href="https://cdpn.io/Chmood/debug/daWjgd/VJrxxOOaDjXr" target="_blank" rel="noreferrer">https://chmood.github.io</a> ©&nbsp;João&nbsp;Colaço&nbsp;
                <script>
                    document.write(new Date().getFullYear());
                </script>
            </article>
        </footer>
    </div>
    </div>
    </div>
);
}