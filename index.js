const DOMSelectors = {
  button: document.getElementByID("btn"),
  box: document.querySelectorAll("text-box"),
  text: document.querySelectorAll("text"),
  input1: document.querySelector("input1"),
  input2: document.querySelector("input2"),
  input3: document.querySelector("input3"),
  form: document.querySelectorAll("form"),
};

console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", "<p> $(input)$ </p>");
  console.log(input);
});
