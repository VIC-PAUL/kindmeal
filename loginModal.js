document.addEventListener("click", () => {
  if (
    event.target.closest(".modalLogin") !==
      document.querySelector(".modalLogin") &&
    event.target.closest("button") !== document.querySelector(".login_btn")
  ) {
    document.querySelector(".modalLogin").style.display = "none";
    window.onscroll = () => {};
  }
  if (event.target == document.querySelector(".cutButton")) {
    document.querySelector(".modalLogin").style.display = "none";
    window.onscroll = () => {};
  }
});

function openmodalLogin() {
  document.querySelector(".modalLogin").style.display = "block";
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
}
