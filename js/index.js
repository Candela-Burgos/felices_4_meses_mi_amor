const month = document.getElementById("month");
const amount = document.getElementById("amount");
let counter = 0;

amount.addEventListener("click", function (e) {
  if ((e.target || e.amount).id == "amount") {
    counter++;
    month.innerHTML = `<p class="month">Felices ${4 + counter} meses</p>`;
  } else {
    console.log("nope");
  }
});
