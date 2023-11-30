const button = document.querySelector(".button");

function go() {
  let valueInput = document.getElementById("num").value;
  let paragrafo = document.querySelector(".paragrafo");
  let celsius =  parseInt(document.getElementById("num").value);
  let fahrenheit = celsius * 1.8 + 32;

  // Remove any existing error message
  let existingErrorMessage = document.querySelector(".error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
  
  if (valueInput.length === 0) {
    // Create error message and insert it after the input
    let errorMessage = document.createElement("p");
    errorMessage.innerHTML = `<br>o campo não pode estar vazio.`;
    setTimeout(() => {
      errorMessage.innerHTML = "";
    }, 1000);
    document.getElementById("num").insertAdjacentElement("afterend", errorMessage);
    errorMessage.classList.add("error-message");
  } else {
    // Display the input value in the paragraph
    paragrafo.textContent = `a temperatura em Fahrenheit é: ${fahrenheit}°F`;
    setTimeout(() => {
      paragrafo.textContent = "";
    }, 10000);
  }

  // Clear the input value
  document.getElementById("num").value = "";
}

button.addEventListener("click", () => {
  go();
});
