const countdown = () => {
    const countDate = new Date('May 17, 2021, 00:00:00').getTime();

    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(gap / day); //uzmem samo broj koji NE ZAOKRUŽUJEM  
    let textHour = Math.floor((gap % day) / hour); //koliki je OSTATAK DO PUNOG DANA 
    let textMinutes = Math.floor((gap % hour) / minute); //koliki je OSTATAK DO PUNOG SATA 
    let textSeconds = Math.floor((gap % minute) / second); //koliki je OSTATAK DO PUNE MINUTE
    console.log(textDay.toString().length);
    console.log((textDay.toString().length !== 1) ? "DVOZNAMENKASTI" : textDay = "0".concat(textDay));
    console.log((textHour.toString().length !== 1) ? "DVOZNAMENKASTI" : textHour = "0".concat(textHour));
    console.log((textMinutes.toString().length !== 1) ? "DVOZNAMENKASTI" : textMinutes = "0".concat(textMinutes));
    console.log((textSeconds.toString().length !== 1) ? "DVOZNAMENKASTI" : textSeconds = "0".concat(textSeconds));

    document.querySelector('.days').innerText = textDay;
    document.querySelector('.hours').innerText = textHour;
    document.querySelector('.minutes').innerText = textMinutes;
    document.querySelector('.seconds').innerText = textSeconds;

};

setInterval(countdown, 1000);