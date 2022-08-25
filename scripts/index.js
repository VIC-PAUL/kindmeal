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
function signupModalFunctionalities() {
  document.addEventListener("click", () => {
    if (event.target == document.querySelector(".cutButton")) {
      document.querySelector(".modal").style.display = "none";
      window.onscroll = () => {};
    } else if (
      event.target.closest(".modal") == document.querySelector(".modal") ||
      event.target == document.querySelector("#signup")
    ) {
      console.log(event.target.closest(".modal"));
    } else {
      document.querySelector(".modal").style.display = "none";
      window.onscroll = () => {};
    }
  });

  function openModal() {
    document.querySelector(".modal").style.display = "block";
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }

  setTimeout(() => {
    document.querySelector("#signup").addEventListener("click", openModal);
  }, 100);
}

function loginModalFunctionalities() {
  document.addEventListener("click", () => {
    if (event.target == document.querySelector(".cutButton2")) {
      document.querySelector(".modalLogin").style.display = "none";
      window.onscroll = () => {};
    } else if (
      event.target.closest(".modalLogin") ==
        document.querySelector(".modalLogin") ||
      event.target == document.querySelector("#email")
    ) {
      console.log(event.target.closest(".modalLogin"));
    } else {
      document.querySelector(".modalLogin").style.display = "none";
      window.onscroll = () => {};
    }
  });

  function openModal2() {
    console.log(1);
    document.querySelector(".modalLogin").style.display = "block";
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }

  setTimeout(() => {
    document.querySelector("#email").addEventListener("click", openModal2);
  }, 100);
}
signupModalFunctionalities();
loginModalFunctionalities();

