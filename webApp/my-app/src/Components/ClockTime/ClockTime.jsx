import "./ClockTime.scss"
import React from 'react'

export default function ClockTime() {

    React.useEffect(() => {
        createSecondLines();
        setClock();
        setInterval(() => setClock, 1000);
    }, []);

    function createSecondLines() {
        let clock = document.querySelector(".clock");
        let rotate = 0;
      
        let byFive = function (n) {
          return n / 5 === parseInt(n / 5, 10) ? true : false;
        };
      
        for (let i = 0; i < 30; i++) {
          let span = document.createElement("span");
      
          if (byFive(i)) {
            span.className = "fives";
          }
      
          span.style.transform = "translate(-50%,-50%) rotate(" + rotate + "deg)";
          clock.appendChild(span);
          rotate += 6;
        }
      };
      
      function setClock() {
        let time = new Date();
      
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
      
        let clock = {
          hours: document.querySelector(".hours"),
          minutes: document.querySelector(".minutes"),
          seconds: document.querySelector(".seconds")
        };
      
        let deg = {
          hours: 30 * hours + 0.5 * minutes,
          minutes: 6 * minutes + 0.1 * seconds,
          seconds: 6 * seconds
        };
      
        clock.hours.style.transform = "rotate(" + deg.hours + "deg)";
        clock.minutes.style.transform = "rotate(" + deg.minutes + "deg)";
        clock.seconds.style.transform = "rotate(" + deg.seconds + "deg)";
      
        let runClock = function () {
          deg.hours += 360 / 43200;
          deg.minutes += 360 / 3600;
          deg.seconds += 360 / 60;
      
          clock.hours.style.transform = "rotate(" + deg.hours + "deg)";
          clock.minutes.style.transform = "rotate(" + deg.minutes + "deg)";
          clock.seconds.style.transform = "rotate(" + deg.seconds + "deg)";
        };
      
        setInterval(runClock, 1000);
      
        printDate();
        function printDate() {
          let months = [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
          ];
          let print = time.getDate() + " / " + months[time.getMonth()];
          let output = document.querySelectorAll("output");
      
          [].forEach.call(output, function (node) {
            node.innerHTML = print;
          });
        };
      };
      
  return (
    <div className="ClockTime">
        <section className="border-clock"></section>
        <section className="clock">
        <ul>
            <li><i>12</i></li>
            <li><i>1</i></li>
            <li><i>2</i></li>
            <li><i>3</i></li>
            <li><i>4</i></li>
            <li><i>5</i></li>
            <li><i>6</i></li>
            <li><i>7</i></li>
            <li><i>8</i></li>
            <li><i>9</i></li>
            <li><i>10</i></li>
            <li><i>11</i></li>
        </ul>

        <h2>JC KronoS</h2>
        <h3>
            The Time asked the time
            <br /> 
            <br /> 
            <br /> 
            what time does the time has.
        </h3>

        <output className="date"></output>

        <div className="minutes"></div>
        <div className="hours"></div>
        <div className="seconds"></div>
        <div className="cercle"></div>

        </section>
    </div>
  )
}
