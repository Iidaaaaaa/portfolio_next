const Select = document.querySelectorAll(".global__select");
const HoverText = document.querySelectorAll(".select");

for (let i = 0; i < HoverText.length; i++) {
  HoverText[i].addEventListener("mouseover", function () {
    Select[i].classList.add("active");
  });
  HoverText[i].addEventListener("mouseout", function () {
    Select[i].classList.remove("active");
  });
}

const Gmail = document.querySelector(".other__textflex");

Gmail.addEventListener("click", async () => {
  const text = Gmail.textContent;

  await navigator.clipboard.writeText(text);

  alert("Gmailをコピーしました。");
});
const HeadTitle = document.querySelector(".header__title");
const headerName = document.querySelector(".header__name");
const ViewScroll = document.querySelector(".header__scroll");
setTimeout(Deleteright, "2000");
setTimeout(Addborder, 2000);
setTimeout(addAnimation, 2500);
setTimeout(Deleteborder, "4000");

function Deleteright() {
  HeadTitle.style.borderRight = "none";
}

function Addborder() {
  headerName.style.borderRight = "2px #fff solid";
}
function addAnimation() {
  headerName.style.display = "block";
  headerName.style.width = "250px";
  headerName.style.animation = `
    typing 1.2s steps(15) forwards,
    caret 0.5s step-end infinite alternate
  `;
}

function Deleteborder() {
  headerName.style.borderRight = "none";
}
