function signupModalFunctionalities() {
  document.addEventListener("click", () => {
    if (event.target == document.querySelector(".cutButton")) {
      document.querySelector(".modal").style.display = "none";
      window.onscroll = () => {};
    } else if (
      event.target.closest(".modal") == document.querySelector(".modal") ||
      event.target == document.querySelector("#signup")
    ) {
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

function openModalLogin() {
  console.log(1);
  document.querySelector(".modal").style.display = "none";
  setTimeout(() => {
    document.querySelector(".modalLogin").style.display = "block";
  }, 500);

  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
}
function openModalSignup() {
  console.log(1);
  document.querySelector(".modalLogin").style.display = "none";
  setTimeout(() => {
    document.querySelector(".modal").style.display = "block";
  }, 500);

  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
}
function loginRedirect() {
  openModalLogin();
}
function signupRedirect() {
  openModalSignup();
}
