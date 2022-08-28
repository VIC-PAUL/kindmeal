var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function joinFunc() {
  window.location.href = 'join.html'
}

function GratDeal() {
  window.location.href = 'MealDeals.html'
}
function KindMoment() {
  window.location.href = 'KindMoment.html'
}
function foodMenu() {
  window.location.href = 'Food Menu.html'
}
function foodLover() {
  window.location.href = 'KindMoment.html'
}
