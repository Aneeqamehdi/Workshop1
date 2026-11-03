// Exercise 1: Animal care form
const animalForm = document.querySelector("#animalForm");
const animalName = document.querySelector("#animalName");
const species = document.querySelector("#species");
const careNote = document.querySelector("#careNote");
const nameError = document.querySelector("#nameError");
const speciesError = document.querySelector("#speciesError");
const noteError = document.querySelector("#noteError");
const noteCount = document.querySelector("#noteCount");
const formResult = document.querySelector("#formResult");

let currentAnimal = null;

function clearAnimalErrors() {
  nameError.textContent = "";
  speciesError.textContent = "";
  noteError.textContent = "";

  animalName.classList.remove("invalid");
  species.classList.remove("invalid");
  careNote.classList.remove("invalid");
}

function validateAnimalForm(nameValue, speciesValue, noteValue) {
  let valid = true;

  if (nameValue === "") {
    nameError.textContent = "Please enter the animal name.";
    animalName.classList.add("invalid");
    valid = false;
  }

  if (speciesValue === "") {
    speciesError.textContent = "Please enter the species.";
    species.classList.add("invalid");
    valid = false;
  }

  if (noteValue.length < 1 || noteValue.length > 150) {
    noteError.textContent = "The care note must contain 1-150 characters.";
    careNote.classList.add("invalid");
    valid = false;
  }

  return valid;
}

animalForm.addEventListener("submit", function(event) {
  event.preventDefault();
  clearAnimalErrors();

  const nameValue = animalName.value.trim();
  const speciesValue = species.value.trim();
  const noteValue = careNote.value.trim();

  if (!validateAnimalForm(nameValue, speciesValue, noteValue)) {
    formResult.textContent = "Please correct the form errors.";
    return;
  }

  currentAnimal = {
    name: nameValue,
    species: speciesValue,
    note: noteValue
  };

  console.log("Valid animal:", currentAnimal);
  formResult.textContent = `${currentAnimal.name} / ${currentAnimal.species} / ${currentAnimal.note}`;

  // Exercise 3: Save one animal. Each valid save replaces the previous value.
  localStorage.setItem("ws05Animal", JSON.stringify(currentAnimal));
  showSavedAnimal(currentAnimal);

  animalForm.reset();
  noteCount.textContent = "0/150";
});

careNote.addEventListener("input", function() {
  const length = careNote.value.length;
  noteCount.textContent = `${length}/150`;

  if (careNote.value.trim().length >= 1 && careNote.value.trim().length <= 150) {
    noteError.textContent = "";
    careNote.classList.remove("invalid");
  }
});

animalName.addEventListener("input", function() {
  if (animalName.value.trim() !== "") {
    nameError.textContent = "";
    animalName.classList.remove("invalid");
  }
});

species.addEventListener("input", function() {
  if (species.value.trim() !== "") {
    speciesError.textContent = "";
    species.classList.remove("invalid");
  }
});

// Exercise 2: Animal sponsorship calculator
const sponsorForm = document.querySelector("#sponsorForm");
const sponsorAnimal = document.querySelector("#sponsorAnimal");
const years = document.querySelector("#years");
const yearsError = document.querySelector("#yearsError");
const totalResult = document.querySelector("#totalResult");
const discountResult = document.querySelector("#discountResult");

sponsorForm.addEventListener("submit", function(event) {
  event.preventDefault();

  yearsError.textContent = "";
  years.classList.remove("invalid");

  const annualFee = Number(sponsorAnimal.value);
  const yearCount = Number(years.value);

  if (!Number.isInteger(yearCount) || yearCount <= 0) {
    yearsError.textContent = "Enter a positive whole number of years.";
    years.classList.add("invalid");
    totalResult.textContent = "Total: not calculated yet.";
    discountResult.textContent = "";
    return;
  }

  const normalTotal = annualFee * yearCount;
  let finalTotal = normalTotal;
  const messages = [];

  if (yearCount > 2) {
    const percentageDiscount = normalTotal * 0.20;
    finalTotal = normalTotal - percentageDiscount;
    messages.push(`20% discount: -€${percentageDiscount.toFixed(2)}`);
  }

  if (yearCount >= 5) {
    finalTotal = finalTotal - 5;
    messages.push("Extra discount for 5 years or more: -€5.00");
  }

  totalResult.textContent = `Total: €${finalTotal.toFixed(2)}`;
  discountResult.textContent = messages.length > 0
    ? messages.join(" | ")
    : "No discount applied.";
});

// Exercises 3 and 4: Save, load and clear the animal
const loadAnimalButton = document.querySelector("#loadAnimal");
const clearAnimalButton = document.querySelector("#clearAnimal");
const savedAnimal = document.querySelector("#savedAnimal");

function showSavedAnimal(animal) {
  savedAnimal.textContent =
    `Name: ${animal.name}\nSpecies: ${animal.species}\nCare note: ${animal.note}`;
}

function loadAnimal() {
  const savedText = localStorage.getItem("ws05Animal");

  if (savedText === null) {
    savedAnimal.textContent = "No saved animal yet";
    currentAnimal = null;
    return;
  }

  try {
    const animal = JSON.parse(savedText);
    currentAnimal = animal;
    showSavedAnimal(animal);
  } catch (error) {
    savedAnimal.textContent = "The saved animal data could not be read.";
    console.error(error);
  }
}

loadAnimalButton.addEventListener("click", loadAnimal);

clearAnimalButton.addEventListener("click", function() {
  localStorage.removeItem("ws05Animal");
  currentAnimal = null;
  loadAnimal();
});

// Reflection: sessionStorage example
const saveSessionButton = document.querySelector("#saveSession");
const loadSessionButton = document.querySelector("#loadSession");
const sessionResult = document.querySelector("#sessionResult");

saveSessionButton.addEventListener("click", function() {
  if (currentAnimal === null) {
    sessionResult.textContent = "Save or load an animal first.";
    return;
  }

  sessionStorage.setItem("ws05SessionAnimal", JSON.stringify(currentAnimal));
  sessionResult.textContent = "The animal was saved for this browser session.";
});

loadSessionButton.addEventListener("click", function() {
  const savedSessionText = sessionStorage.getItem("ws05SessionAnimal");

  if (savedSessionText === null) {
    sessionResult.textContent = "No session animal saved.";
    return;
  }

  const sessionAnimal = JSON.parse(savedSessionText);
  sessionResult.textContent =
    `${sessionAnimal.name} / ${sessionAnimal.species} / ${sessionAnimal.note}`;
});

// Exercise 4: Load saved localStorage data when the page opens.
loadAnimal();
