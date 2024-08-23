let slider = document.getElementById("Range");
let output = document.getElementById("Value");
output.innerHTML = slider.value;

let selects = document.querySelectorAll("select");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let text = document.querySelector("p");

const ChangeSumm = () => {
  const select1 = selects[0].value;
  const select2 = selects[1].value;
  const howSumm = slider.value;
  const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${select1}&to=${select2}&amount=${howSumm}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cb777e9a31msha0d27ced3a09d57p141396jsn102f4b1901dd",
      "x-rapidapi-host": "currency-converter18.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      text.textContent = `${howSumm} ${select1} = ${data.result.convertedAmount} ${select2}`;
    });
};

btn.addEventListener("click", ChangeSumm);

slider.oninput = function () {
  output.innerHTML = this.value;
};
