var plus = document.querySelectorAll(".fa-plus-circle");

// plus.forEach((button, index) => {
//   button.addEventListener("click", function () {
//     var count = document.querySelectorAll(".quantity")[index];
//     console.log(count, count.textContent);
//     count.textContent = parseInt(count.textContent) + 1;
//     updatePrice();
//   });
// });

for (var i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function (event) {
    var index = Array.from(plus).indexOf(event.target);
    var count = document.querySelectorAll(".quantity")[index];
    count.textContent = parseInt(count.textContent) + 1;
    updatePrice();
  });
}

var minus = document.querySelectorAll(".fa-minus-circle");

minus.forEach((button, index) => {
  button.addEventListener("click", function () {
    var count = document.querySelectorAll(".quantity")[index];
    console.log(count, count.textContent);
    count.textContent = parseInt(count.textContent) - 1;
    updatePrice();
  });
});

document.querySelectorAll(".fa-heart").forEach((button) => {
  button.addEventListener("click", function () {
    if (button.style.color !== "red") {
      button.style.color = "red";
    } else {
      button.style.color = "black";
    }
  });
});

document.querySelectorAll(".fa-trash-alt").forEach((button, index) => {
  button.addEventListener("click", function () {
    let card = document.querySelector(".list-products");
    let cartItem = document.querySelectorAll(".list-products > .card-body")[
      index
    ];
    card.removeChild(cartItem);
    updatePrice();
  });
});

function updatePrice() {
  var prices = document.querySelectorAll(".unit-price");
  var quantities = document.querySelectorAll(".quantity");
  var total = 0;
  prices.forEach((price, index) => {
    const priceValue = parseFloat(price.textContent.replace("$", ""));
    const quantityValue = parseInt(quantities[index].textContent);
    total += priceValue * quantityValue;
  });
  document.querySelector(".total").textContent = total + " $";
}
