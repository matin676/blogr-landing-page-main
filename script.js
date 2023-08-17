document.addEventListener("DOMContentLoaded", () => {
  const close = document.querySelector(".ham_icon .close");
  const ham = document.querySelector(".ham_icon .ham");
  const nav = document.querySelector("nav .container");

  ham.addEventListener("click", () => {
    close.style.display = "block";
    ham.style.display = "none";
    nav.classList.add("mobile_nav");
  });

  close.addEventListener("click", () => {
    ham.style.display = "block";
    close.style.display = "none";
    nav.classList.remove("mobile_nav");
  });
});
