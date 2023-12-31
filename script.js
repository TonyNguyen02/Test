const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, komm on!";
  gif.src =
    "https://media.giphy.com/media/opvdnsIBv1AciolLjk/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
   question.innerHTML = "Ich warte...";
   gif.src=
     "https://media.giphy.com/media/G2t01TrStBtdezw0b6/giphy.gif";
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
