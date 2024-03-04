const linkcopy = document.querySelectorAll(".link-card .link-copy");
const popup = document.querySelector(".pop-up");

linkcopy.forEach((action) => {
  action.onclick = (e) => {
    e.preventDefault();
    const url = action.parentElement.getAttribute("href");
    navigator.clipboard.writeText(url);
    popup.classList.toggle("show-pop");
  };
});

const ok = document.querySelector(".ok");
ok.addEventListener("click", () => {
  popup.classList.remove("show-pop");
});
