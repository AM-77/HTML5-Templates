window.onload = () => {
  // Set the countdown

  let deadline = new Date("Sep 7, 2019 15:37:25").getTime();
  let _days = document.querySelector("div.header .countdown .days .nbr")
  let _hours = document.querySelector("div.header .countdown .hours .nbr")
  let _minutes = document.querySelector("div.header .countdown .minutes .nbr")
  let _seconds = document.querySelector("div.header .countdown .seconds .nbr")

  let countdown_interval = setInterval(() => {
    let remain, days, hours, minutes, seconds

    remain = deadline - new Date().getTime();
    days = Math.floor(remain / (1000 * 60 * 60 * 24));
    hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((remain % (1000 * 60)) / 1000);

    days === 1 ? document.querySelector("div.header .countdown .days .tag").innerHTML = "day" : document.querySelector("div.header .countdown .days .tag").innerHTML = "days"
    hours === 1 ? document.querySelector("div.header .countdown .hours .tag").innerHTML = "hour" : document.querySelector("div.header .countdown .hours .tag").innerHTML = "hours"
    minutes === 1 ? document.querySelector("div.header .countdown .minutes .tag").innerHTML = "minute" : document.querySelector("div.header .countdown .minutes .tag").innerHTML = "minutes"
    seconds === 1 ? document.querySelector("div.header .countdown .seconds .tag").innerHTML = "second" : document.querySelector("div.header .countdown .seconds .tag").innerHTML = "seconds"

    _days.innerHTML = days
    _hours.innerHTML = hours
    _minutes.innerHTML = minutes
    _seconds.innerHTML = seconds

    if (remain < 0) {
      clearInterval(countdown_interval);
      document.querySelector("div.header .countdown").innerHTML = "<li class='expired'>EXPIRED</li>";
    }
  }, 1000);

  // Set the copyright year
  document.querySelector(
    "div.copyright span.year"
  ).innerHTML = new Date().getFullYear();
};