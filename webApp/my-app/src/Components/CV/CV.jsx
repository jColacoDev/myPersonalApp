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
                            <h3>U<span className="smallCaps">I</span>/U<span className="smallCaps">X</span> D<span className="smallCaps">esign</span></h3>
                            <p>Figma, Sketch, Inkscape
                               <br />Interfaces, prototypes, style guides</p>
                        </article>
                        <article>
                            <h3>I<span className="smallCaps">ntegration</span></h3>
                            <p>Responsive & mobile-first, accessibility, SEO, performance</p>
                        </article>
                        <article>
                            <h3>F<span className="smallCaps">rontend Development</span></h3>
                            <p>HTML5, CSS3, Sass, Javascript ES6, Typescript
                               <br/>React, Angular, Redux, DevTools
                            </p>
                        </article>
                        <article>
                            <h3>B<span className="smallCaps">ackend Development</span></h3>
                            <p>Node.Js, SQL, PhP, Java, Python
                                <br/>Express, MongoDB, PostgreSQL, MySQL, Apache, XAMPP
                            </p>
                        </article>
                        <article>
                            <h3>D<span className="smallCaps">evOps (CI/CD)</span></h3>
                            <p>Node npm, Git, GitHub, Bitbucket, Maven, Jenkins, CircleCI, Docker, Sonar, Kubernetes, Linux, Scripts</p>
                        </article>
                        <article>
                            <h3>E<span className="smallCaps">lectronics</span></h3>
                            <p>C, C++, Python, Js, Assembly, VHDL, Verilog
                                <br />Electronic circuits, PCB design, Integrated circuits, Digital eletronics, IoT, LoraWAN, Wearables
                                <br />Arduino, ESPressif, RaspberryPi, Microchip, TTN, RTOS
                            </p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--primary section--tools">
                    <h2 className="section__title section__title--white">Tools</h2>
                    <div className="section__body">
                        <article>
                            <h3>Tech</h3>
                            <p>
                                <strong>
                                    Wordpress, Visual Studio, Postman, FileZilla, Gitbash, Atlas, Adobe Suite, Jest, Lens, GitLab, Terminal
                                    , paint.Net, Filmora, Jira, Teams, Slack, Excel
                                </strong>
                            </p>
                        </article>
                        <article>
                            <h3>Perks</h3>
                            <ul>
<li>Skilled and experienced in Agile Development process for diverse requirements</li>
<li>Worked on different operating systems and platforms of software and application development</li>
<li>Ability to work confidently and passionately until the desired outcome is achieved</li>
<li>Strong analytical and problem solving skills</li>
<li>Excellent communication skills; both verbal and written</li>
<li>Willing to update my knowledge and learn new skills to perform efficiently</li>
                            </ul>
                            <img className='imgWorkflow' src={require("./imgs/agile.png")} alt="agile pic" />
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--orange section--timeline">
                    <h2 className="section__title">Experience</h2>
                    <div className="section__body">
                        <div className="timeline">

                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2021 -2022
                                    </time>
                                    <span>Critical Techworks</span>
                                </h3>
                                <p>
                                    Intégration CSS, développement JS, Symfony, WordPress, Drupal, Twig, Webpack.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020 -2021
                                    </time>
                                    <span>Robert Mauser</span>
                                </h3>
                                <p>
                                    Intégration CSS, développement JS, Symfony, WordPress, Drupal, Twig, Webpack.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020
                                    </time>
                                    <span>Critical Software</span>
                                </h3>
                                <p>Summer internship</p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        20215 -2020
                                    </time>
                                    <span>Ergoface, <span style={{fontVariant: "all-small-caps"}}>mobiliário de escritório e projectos, lda</span></span>
                                </h3>
                                <p>
                                    Intégration CSS, développement JS, Symfony, WordPress, Drupal, Twig, Webpack.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020 -2021
                                    </time>
                                    <span>World Academy</span>
                                </h3>
                                <p>
                                    Intégration CSS, développement JS, Symfony, WordPress, Drupal, Twig, Webpack.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        20215 -2020
                                    </time>
                                    <span>IST
                                        <span className='smallCaps'>
                                            , Instituto Superior Técnico 
                                        </span>
                                    </span>
                                </h3>
                                <p>
                                    Intégration CSS, développement JS, Symfony, WordPress, Drupal, Twig, Webpack.
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
                    <h2 className="section__title section__title--primary">Profile</h2>
                    <div className="section__body grid grid--50">
                        <article>
                            <h3>Maker</h3>
                            <p>
                                I face projects with a can do attitude, using the best tools to produce the best artifacts.
                                <br />I love creating digital and handcrafted ideas from sketch watching it grow to a fully functional thing.
                            </p>
                        </article>
                        <article>
                            <h3>Team</h3>
                            <p>
                                A work family where one learns and teaches, creating the Vision with Respect, Transparency, Reliability
                                <br/><i>A team happens when I becomes We, I do my best so We can go further!</i>
                                <br/>I've experienced team work in school/college, hackathons and professionally with the a notion of purpose and commitment. 
                            </p>
                        </article>
                        <article>
                            <h3>Comm</h3>
                            <p>
                                True magic happens when shared ideas are listened and understood.
                                <br /><i>A different language is a different vision of life.</i>
                                <br /><strong>I know:</strong> 
                                <br />Português, English, Español
                                <br /><strong>I'm learning:</strong>
                                <br />Deutsh
                                <br /><strong>I want to learn:</strong>
                                <br />Italiano, Français, Sign language
                            </p>
                        </article>
                        <article>
                            <h3>Hobbies</h3>
                            <p>
                                Play the <strong>guitar</strong>, walk my <strong>dogs</strong>, <strong>build</strong> something <strong>digital, analog, artistic</strong>.
                                <br />Go deep into the <strong>wild! Nature</strong>, fresh air and sweet sounds. 
                                <br /><strong>Photography</strong> and <strong>cinematography</strong>, <i>the angles and perspective as a means for experiencing the world in different lights</i>.
                                <br />I fly a drone, handle a gimbal and edit with Filmora.
                                <br />I go explore everywhere with my custom made eScooter!
                            </p>
                        </article>
                    </div>
                </section>
            </div>
            <div className="page page--portfolio">

                <section className="section section--secondary section--summary">
                    <div className="section__body">
                        <article>
                            <h3>WebApps</h3>
                            <p>Mes derniers projets</p>
                        </article>
                        <article>
                            <h3>Electronics</h3>
                            <p>Socles front-end</p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--orange section--portfolio-1">
                    <h2 className="section__title section__title--primary">Web Apps</h2>
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
                    <h2 className="section__title">Electronics</h2>
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
                            <h3>Web App Developer</h3>
                            <p>Developpement JS sur-mesure</p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>
                <section className="section section--orange section--projects-1">
                    <h2 className="section__title section__title--primary">What drives me</h2>
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
                    <h2 className="section__title section__title--secondary">Hackathons</h2>
                    <div className="section__body">
                        <p><em>Les applis web que j'ai développées</em></p>
                        <ul>
                            <li><a href="taikai.network/en/cityhack/challenges/city-hack-2021/projects/ckp1yk9ak13436020rugdbzyuzmt/idea" target="_blank" rel="noreferrer">
                            Future City2022- Compass Rose</a>
                                Smart Environment pretende dar ouvidos ao Meio Ambiente, sentindo os fenómenos de forma precisa e quantitativa e qualificativa para que nós possamos perceber fenómenos ambientais e como agir!
                                <span className="pill">Critical Software</span>
                            </li>
                            <li><a href="taikai.network/en/cityhack/challenges/city-hack-2021/projects/ckp1yk9ak13436020rugdbzyuzmt/idea" target="_blank" rel="noreferrer">
                            CityHack2021- Smart Environment</a>
                                Smart Environment pretende dar ouvidos ao Meio Ambiente, sentindo os fenómenos de forma precisa e quantitativa e qualificativa para que nós possamos perceber fenómenos ambientais e como agir!
                            </li>
                            <li><a href="taikai.network/en/cityhack/challenges/city-hack-2020/projects/ckak3a179fj4808646dysqmc9/idea" target="_blank" rel="noreferrer">
                                CityHack2020- eMotion Flow</a>
                                An IoT RADAR/InfraR electronic control system that counts the occupancy rate of a public place, providing real-time data and protecting Public Health
                            </li>
                            <li><a href="taikai.network/en/cityhack/challenges/city-hack-2021/projects/ckp1yk9ak13436020rugdbzyuzmt/idea" target="_blank" rel="noreferrer">
                            Tech4Covid19- Q-Card</a>
                                A card that is a ticket for a line queue in any commercial space(RFID, NFC or QRcode) People register their turn by swiping these or Online, than receive an SMS with their number and updates on the Q!
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="section section--secondary section--projects-3">
                    <h2 className="section__title section__title--white">Tools &amp; Bookmarks</h2>
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