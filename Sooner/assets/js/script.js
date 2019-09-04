window.onload = () => {
  // Set the countdown

  let deadline = new Date("Sep 5, 2019 15:37:25").getTime();
  let _days = document.querySelector("div.header .countdown .days")
  let _hours = document.querySelector("div.header .countdown .hours")
  let _minutes = document.querySelector("div.header .countdown .minutes")
  let _seconds = document.querySelector("div.header .countdown .seconds")


  let countdown = () => {
    let remain, days, hours, minutes, seconds

    remain = deadline - new Date().getTime();
    days = Math.floor(remain / (1000 * 60 * 60 * 24));
    hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((remain % (1000 * 60)) / 1000);

    _days.innerHTML = "" + days + ""
    _hours.innerHTML = "" + hours + ""
    _minutes.innerHTML = "" + minutes + ""
    _seconds.innerHTML = "" + seconds + ""


    if (remain < 0) {
      clearInterval(countdown_interval);
      document.querySelector("div.header .countdown").innerHTML = "<li>EXPIRED</li>";
    }
  }

  countdown()

  let countdown_interval = setInterval(() => {
    countdown()
  }, 1000);

  document.querySelector("div.header ul.countdown .days");

  // Set the copyright year
  document.querySelector(
    "div.copyright span.year"
  ).innerHTML = new Date().getFullYear();
};