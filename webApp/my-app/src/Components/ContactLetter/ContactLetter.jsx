import "./ContactLetter.scss";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactLetter() {
    const [sentClass, setSentClass] = useState("");
    const [subjectInput, setSubjectInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [errorInput, setErrorInput] = useState("");

    const form = React.useRef();
    const errorSpanRef = React.useRef();
    
    React.useEffect(() => {
        if(errorInput !== ""){
            errorSpanRef.current.classList.add("shaking");
            setTimeout(() => {
                errorSpanRef.current.classList.remove("shaking");
            }, "1000");
        }
      }, [errorInput]);

      
    function openLetter(e) {
        e.preventDefault();
        setSentClass("");
        setMessageInput("");
        setSubjectInput("");
    }

    function checkInputs() {
        let flag = "";

        if(messageInput === "")
            flag="message";
        else if(subjectInput === "")
            flag="subject";
        else if(nameInput === "")
            flag="name";
        else if(!ValidateEmail(emailInput))
            flag="email";
        else flag="";

        setErrorInput(flag);

        return flag === "" ? true : false;
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if(!checkInputs()) return;
    
        setSentClass("sent");
    
        emailjs
        .sendForm(
            'service_now7y2s',
            'template_xx3gpgl',
            form.current,
            'zegNLqnQhrIr9Kpj7'
        )
        .then(
            (result) => {
                // setSentClass("sent");
            },
            (error) => {
              console.log(error.text);
            }
        );
    };

    function ValidateEmail(mail){
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail))
            return (true)
        else 
            return (false)
    }

    function handleSubjectChange(event){
        setSubjectInput(event.target.value);

        if(errorInput === "subject" && event.target.value)
            setErrorInput("");
    }
        
    function handleNameChange(event){
        setNameInput(event.target.value)

        if(errorInput === "name" && event.target.value)
            setErrorInput("");
    }
        
    function handleMessageChange(event){
        setMessageInput(event.target.value)

        if(errorInput === "message" && event.target.value)
            setErrorInput("");
    }
        
    function handleEmailChange(event){
        setEmailInput(event.target.value);
        
        if(errorInput === "email" && event.target.value)
            setErrorInput("");
            
    }

    return (
        <form ref={form} id="ContactLetter" className={`ContactLetter ${sentClass}`} autocomplete="off">
            <div className="wrapper">
                <article className="letter">
                    <div className="side">
                        <h1>Contact me</h1>
                        <textarea autocomplete="off" placeholder="Message"
                            onChange={handleMessageChange}
                            name="message"
                            id="message"
                            value={messageInput}
                        >
                        </textarea>
                    </div>
                    <div className="side">
                        <input autocomplete="off" type="subjectType" placeholder="Subject"
                            name="subject"
                            id="subject"
                            onChange={handleSubjectChange}
                            value={subjectInput}
                        />
                        <input autocomplete="off" type="name" placeholder="Name"
                            name="name"
                            id="name"
                            onChange={handleNameChange}
                            value={nameInput}
                        />
                        <input autocomplete="off" type="cartaType" placeholder="&#69;-&#109;
ail" 
                            name="cartaType"
                            id="cartaType"
                            onChange={handleEmailChange}
                            value={emailInput}
                        />
                        <footer> 
                            <span ref={errorSpanRef}>{errorInput!=="" ? `Write the ${errorInput}` : ""}</span>
                            <button type="btnSubmit" onClick={sendEmail} id="sendLetter">
                                Send
                            </button>
                        </footer>
                    </div>
                </article>
                <div className="envelope front"></div>
                <div className="envelope back"></div>
            </div>
            <button onClick={openLetter} className="result-message centered">
                Thank you for your message! <br /> Send another
            </button>
        </form>
    );
}
