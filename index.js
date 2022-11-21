const DOMSelectors = {
  button: document.getElementsByClassName("btn"),
  box: document.querySelectorAll("text-box"),
  text: document.querySelectorAll("text"),
  input1: document.querySelector("textbox1"),
  input2: document.querySelector("textbox2"),
  input3: document.querySelector("textbox3"),
  form: document.getElementById("form"),
  display: document.querySelector("display"),
};

console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function () {
  let input1 = DOMSelectors.input1.value,
    input2 = DOMSelectors.input2.value,
    input3 = DOMSelectors.input3.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", "<p> $(.input1)$ </p>");
  DOMSelectors.box.insertAdjacentHTML("beforeend", "<p> $(.input1)$ </p>");
  DOMSelectors.box.insertAdjacentHTML("beforeend", "<p> $(.input1)$ </p>");
  console.log(input1, input2, input3);
});

DOMSelectors.form.addEventListener("submit", function (bruh) {
  bruh.preventDefault();
});
