console.log("hello, world");

const form = document.querySelector("form");

function savePreferences(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const colour = formData.get("colour");
  const preferences = {
    colour,
  };
  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});

const colour = localStorage.getItem("colour");

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}

function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));
  if (preferences) {
    const input = document.querySelector("input");
    input.value = preferences.colour || "#000000";
    const body = document.querySelector("body");
    body.style.color = preferences.colour || "#000000";
  }
}
function clearPreferences(event) {
  event.preventDefault();
  localStorage.removeItem("preferences");
}
const defaults = {
  colour: "#000000",
};
body.style.color = preferences.colour || defaults.colour;
function handleLocalStorageChange(event) {
  if (event.key === "favouriteColour") {
    const newValue = event.newValue;
    console.log(`local storage favouriteColour changed to: ${newValue}`);
  }
}
window.addEventListener("storage", handleLocalStorageChange);
