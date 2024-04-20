import { validaInputs, validaTextAreas } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    validaInputs(event.target);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (event) => {
    validaTextAreas(event.target);
  });
});
