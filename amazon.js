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
