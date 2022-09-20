function black() {
  var a = document.body;
  a.classList.toggle("light-mode");
  let card = document.getElementsByClassName("card");
  // card[0].classList.add("light-mode");
  // console.log(card);
  Array.from(card).forEach((Element) => {
    Element.classList.toggle("light-mode");
  });
}
function loadCoupon() {
  document.getElementById("coupon").style.display = "block";
  document.getElementById("search").style.opacity = "0.5";
}

const closeCoupon = () => {
  document.getElementById("coupon").style.display = "none";
  document.getElementById("search").style.opacity = "1";
};

let x = document.getElementById("out");
let y = document.getElementById("weather");
let z = document.getElementById("location");
function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geo Not Supported";
  }
}
function showPosition(data) {
  console.log(data);
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  // x.innerText = `Lat is ${lat} & long is ${long}`;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  //api calling
  fetch(url, { method: "GET" })
    //return promise
    .then((res) => res.json())
    // resolve the promise
    .then((data) => {
      // y.innerText = `Your City is ${data.city.name}`;
      z.innerText = `Temp of day is ${data.list[0].temp.day} °C`;
    });
}
