const DOMSelectors = {
  button: document.querySelector("btn"),
  box: document.querySelectorAll("text-box"),
  text: document.querySelectorAll("text"),
  input: document.querySelectorAll("form-inputs"),
};

console.log(DOMSelectors);

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input);
});
