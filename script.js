let userInput = document.querySelector("#date");
let dateBtn = document.querySelector("#dateBtn");
let result = document.querySelector("#result");

dateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  1;
  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 > -m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.style.display = "block";
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days away from this date`;
  console.log(y3, m3, d3, d2, m2, y2, d1, m1, y1);
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
