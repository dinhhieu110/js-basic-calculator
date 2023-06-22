(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let value = event.target.dataset.num;
      screen.value = screen.value + value;
    });
  });

  equal.addEventListener("click", function () {
    if (screen.value === " ") {
      screen.value = " ";
    } else {
      let rs = eval(screen.value);
      screen.value = screen.value + " = " + rs;
    }
  });

  clear.addEventListener("click", function () {
    screen.value = "";
  });
})();
