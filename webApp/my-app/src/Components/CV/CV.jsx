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
                <section className='downloadButton'>
                    <a download 
                        href= {process.env.PUBLIC_URL + '/files/jColaco_CV.pdf'}>Download my PDF CV
                        <figure></figure>
                    </a>
                </section>
                <div className="user__metas">
                    <section className="user__social section">
                        <h2 className="section__title--simple">Social</h2>

                        <article className="user__socials socials">
                            <a className="social social--twitter" 
                                href="https://www.linkedin.com/in/jcolacodev/" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/social/linkedin.png")} alt="" />
                                <span>linkedin.com/jColacoDev</span>
                            </a>
                            <a className="social social--codepen" href="https://github.com/jColacoDev" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/social/github.png")} alt="" />
                                <span>github.com/jColacoDev</span>
                            </a>
                            <a className="social social--github" href="https://codepen.io/jcolacodev" target="_blank" rel="noopener noreferrer">
                                <img className="social__icon" src={require("../../Images/icons/social/codepen.png")} alt="" />
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
                               <br/>React, Next, Native, Angular, Redux, DevTools
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
                            <p>Node npm, Git, GitHub, Bitbucket, Maven, Jenkins, CircleCI, Docker, Sonar, Kubernetes, Linux, Scripts, Vercel</p>
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
                                    , paint.Net, Filmora, Jira, Teams, Slack, Excel, Putty, WinSCP
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
                            <img className='imgWorkflow' src={process.env.PUBLIC_URL + "/images/agile.png"} alt="agile pic" />
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
                                <span>Frontend developer</span>
                                <p>
                                A BMW and Critical Software joint venture. I worked as a frontend developer with Angular.TS framework, testing TestBed, Jest and Spectator. 
                                Backend with Java, Springboot, PostgreSQL developed in a Jenkins pipeline amidst Sonar quality control.
                                Worked with two teams in agile scrum methodology creating managing apps near costumers and design team.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020 -2021
                                    </time>
                                    <span>Robert Mauser</span>
                                </h3>
                                <span>Specialized salesman</span>
                                <p>
                                Electronic components store. I worked in the frontend costumer service and backend warehouse logistics.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020
                                    </time>
                                    <span>Critical Software</span>
                                </h3>
                                <span>Summer camp intern</span>
                                <p>
                                Summer internship at Critical Software where I had first contact with professional IT environment.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        20215 -2020
                                    </time>
                                    <span>Ergoface, <span style={{fontVariant: "all-small-caps"}}>mobiliário de escritório e projectos, lda</span></span>
                                </h3>
                                <span>Salesman and executive secretary</span>
                                <p>
                                Family business office furniture retailer, where I worked in sales, product assembler and office paper work.
                                </p>
                            </article>
                            <article className="timeline__item">
                                <h3>
                                    <time className="date-range">
                                        2020 -2021
                                    </time>
                                    <span>World Academy</span>
                                </h3>
                                <span>Frontend Web Development</span>
                                <p>
                                Top professional multimedia, arts and digital events school. Learned deeply about web structure and communication focusing the latest developments with HTML5, CSS3, ES6 and React framework plus React.Native. The course also regards a Wordpress and UxUi module with SEO, prototypes and interfaces core values using Figma and Adobe XD.
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
                                <span>Computer and electronics Master</span>
                                <p>
                                Leading Engeneering college in Europe and the world, where I've learned physics, mathmatics, programming, algorithms, made long lasting friendships and a object oriented mindset.
                                I have frozen my enrollment, to be resumed in 2023.
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
                                <i>A team happens when I becomes We, I do my best so We can go further!</i>
                                <br/>I've experienced team work in school/college, hackathons and professionally with the notion of purpose and commitment. 
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
                            <p>Built over the browser to display and gather information from the user and to the user. I'm keen on using React with Next.js on the frontend and Node with Express in backend with PostgreSQL or Mongo database. 
                            </p>
                        </article>
                        <article>
                            <h3>Electronics</h3>
                            <p>Built with transistors, components and ATmel, ESPressif uControllers with Arduino framework.
                            <br />I'm interested in deploying a Azure RTOS ThreadX IoT and LoRaWAN program, using WebApps as bridge to digital and physical world.
                             </p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>

                <section className="section section--orange section--portfolio-1">
                    <h2 className="section__title section__title--primary">Web Apps</h2>
                    <div className="section__body">
                        <figure className='underConstruction'>
                            <img src={process.env.PUBLIC_URL + "/images/underConstruction.png"}
                            alt="under Construction" />
                        </figure>
                    </div>
                </section>

                <section className="section section--primary section--portfolio-2">
                    <h2 className="section__title">Electronics</h2>
                    <div className="section__body" style={{paddingBottom: "1.6rem"}}>
                        <figure className='underConstruction'>
                            <img src={process.env.PUBLIC_URL + "/images/underConstruction.png"}
                            alt="under Construction" />
                        </figure>
                    </div>
                </section>
            </div>
            <div className="page page--projects">
                <section className="section section--secondary section--summary">
                    <div className="section__body">
                        <article>
                            <h3>Web App Developer</h3>
                            <p>I develop software programs, applications, accessible using a web browser designed for interaction with the end user.</p>
                        </article>
                    </div>
                    <div className="section__foot"></div>
                </section>
                <section className="section section--orange section--projects-1">
                    <h2 className="section__title section__title--primary">What drives me</h2>
                    <div className="section__body">
                        <p>
                            I love developing programs with meaningful impact. I see web app development as a powerful path to create and share over the internet tools to improve everyday tasks.
                        </p>
                    </div>
                </section>
                <section className="section section--primary section--projects-2">
                    <h2 className="section__title section__title--secondary">Hackathons</h2>
                    <div className="section__body">
                        <p><em>With great power comes great responsibility.</em></p>
                        <p>Participating in hackathons allows me to share and learn from others in projects we develop aiming to make a better future, more sustainable.</p>
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
                    <h2 className="section__title section__title--white">Bookmarks</h2>
                    <div className="section__body">
                        <p><em>Bookmarks I find useful for web development</em></p>
                        <ul>
                            <li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">canIuse</a>
                                Used to understand how we can improve our web presence.
                                <span className="pill">perso</span>
                            </li>
                            <li><a href="https://seositecheckup.com/" target="_blank" rel="noreferrer">SEOsiteCheckup</a>
                            </li>
                            <li><a href="https://cssgridgarden.com/" target="_blank" rel="noreferrer">CSSgridGarden</a>
                                Games are the best way to learn new skills.                            
                            </li>
                            <li><a href="http://www.csszengarden.com/" target="_blank" rel="noreferrer">CSSzenGarden</a>
                            </li>
                            <li><a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">flexBoxFroggy</a>
                            </li>
                            <li><a href="https://sitesee.co/" target="_blank" rel="noreferrer">siteSee</a>
                                Inspiration web sites to better express ourselves digitally.
                            </li>
                            <li><a href="https://siteinspire.com/" target="_blank" rel="noreferrer">siteInspire</a>
                            </li>
                            <li><a href="https://unicode-table.com/pt/" target="_blank" rel="noreferrer">unicode-table</a>
                                Icons characters and images to build content
                            </li>
                            <li><a href="https://pngtree.com/" target="_blank" rel="noreferrer">PNG tree</a>
                            </li>
                            <li><a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>
                            </li>
                            <li><a href="https://picsum.photos/" target="_blank" rel="noreferrer">Picsum</a>
                            </li>
                            <li><a href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a>
                            </li>
                            <li><a href="https://yoksel.github.io/url-encoder/" target="_blank" rel="noreferrer">url-encoder</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

        </main>
        
        <footer className="cv__foot">
            <article className="copyright">
                web Version <em>Curriculum Vitae</em> <strong>©&nbsp;jColaco.dev&nbsp;</strong>by João Colaço
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