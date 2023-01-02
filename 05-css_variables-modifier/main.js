const modifiers = document.querySelectorAll(".controls input");

function handleModify() {
  console.log(this);
}

modifiers.forEach((modifier) =>
  modifier.addEventListener("change", handleModify)
);
modifiers.forEach((modifier) =>
  modifier.addEventListener("mousemove", handleModify)
);
