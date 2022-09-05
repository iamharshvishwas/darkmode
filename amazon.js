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
