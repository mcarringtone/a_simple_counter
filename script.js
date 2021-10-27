const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const count = document.querySelector(".output");
let score = 0;

plus.addEventListener("click", () => {
  score++;
  count.innerHTML = score;
});

minus.addEventListener("click", () => {
  score--;
  count.innerHTML = score;
});
