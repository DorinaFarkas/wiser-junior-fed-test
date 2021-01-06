window.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
});

toggleCard = () => {
  const Card = document.querySelector(".card");
  const buttonText = document.querySelector(".button-text");
  
  Card.classList.toggle("open");

  if (buttonText.innerHTML === "Show description") {
    buttonText.innerHTML = "Hide description";
  } else {
    buttonText.innerHTML = "Show description";
  }
};