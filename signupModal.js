document.addEventListener("click", () => {
  if (
    event.target.closest(".modal") !== document.querySelector(".modal") &&
    event.target.closest("button") !== document.querySelector(".signup_btn")
  ) {
    document.querySelector(".modal").style.display = "none";
    window.onscroll = () => {};
  }
  if (event.target == document.querySelector(".cutButton")) {
    document.querySelector(".modal").style.display = "none";
    window.onscroll = () => {};
  }
});

function openModal(modal_type) {
  if (modal_type == "signup") {
    document.querySelector(".modal").style.display = "block";
     window.onscroll = function () {
    window.scrollTo(0, 0);
  };
  }
}
