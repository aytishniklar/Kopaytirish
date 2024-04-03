const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const savol1 = document.getElementById("savol");
const input1 = document.getElementById("input");
const form1 = document.getElementById("form");
const baxo1 = document.getElementById("baxo");
let baxo = JSON.parse(localStorage.getItem("baxo"));

if (!baxo) {
  baxo = 0;
}

baxo1.innerText = `baxo: ${baxo}`;
savol1.innerText = `${num1} * ${num2}?`;
const correctAns = num1 * num2;

form1.addEventListener("submit", () => {
  const userAns = +input1.value;
  if (userAns === correctAns) {
    baxo++;
    updateLocalStorage();
  } else {
    baxo--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("baxo", JSON.stringify(baxo));
}