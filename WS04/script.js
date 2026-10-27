// Show and hide the small table
const toggleTableBtn = document.querySelector("#toggleTableBtn");
const infoTable = document.querySelector("#infoTable");

toggleTableBtn.addEventListener("click", function() {
  infoTable.classList.toggle("hidden");
});

// Task 1
const task1Heading = document.querySelector("#task1Heading");
const animalText = document.querySelector("#animalText");

document.querySelector("#headingBtn").addEventListener("click", function() {
  task1Heading.textContent = "Updated heading!";
});

document.querySelector("#styleBtn").addEventListener("click", function() {
  task1Heading.classList.toggle("highlight");
});

document.querySelector("#animalTextBtn").addEventListener("click", function() {
  animalText.textContent = "Tigers are powerful wild cats that live in Asia.";
});

document.querySelector("#addSentenceBtn").addEventListener("click", function() {
  animalText.textContent += " Many animals need protection in the wild.";
});

document.querySelector("#backgroundBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});

// Task 2 - these elements are created only with JavaScript
const animalContent = document.querySelector("#animalContent");
const newHeading = document.createElement("h3");
const newParagraph = document.createElement("p");
const newImage = document.createElement("img");

newHeading.textContent = "Animal of the Day";
newHeading.classList.add("animal-heading");
newParagraph.textContent = "The giant panda eats mostly bamboo and lives in mountain forests.";
newImage.src = "panda.png";
newImage.alt = "Giant panda eating bamboo";

animalContent.append(newHeading, newParagraph, newImage);

document.querySelector("#hideAnimalBtn").addEventListener("click", function() {
  animalContent.style.display = "none";
});

document.querySelector("#showAnimalBtn").addEventListener("click", function() {
  animalContent.style.display = "block";
});

// Task 3
const animalSelect = document.querySelector("#animalSelect");
const selectedName = document.querySelector("#selectedAnimalName");
const selectedImage = document.querySelector("#selectedAnimalImage");
const selectedDescription = document.querySelector("#selectedAnimalDescription");

const animals = {
  elephant: {
    name: "Elephant",
    image: "elephant.png",
    alt: "Elephant standing in grass",
    description: "Elephants are the world's largest land animals."
  },
  tiger: {
    name: "Tiger",
    image: "tiger.png",
    alt: "Tiger standing in a forest",
    description: "Tigers are large wild cats with orange fur and black stripes."
  },
  penguin: {
    name: "Penguin",
    image: "penguin.png",
    alt: "Penguin standing on snow",
    description: "Penguins are birds that cannot fly, but they are excellent swimmers."
  },
  panda: {
    name: "Panda",
    image: "panda.png",
    alt: "Giant panda eating bamboo",
    description: "Giant pandas are known for their black and white fur and bamboo diet."
  }
};

animalSelect.addEventListener("change", function() {
  const chosenAnimal = animals[animalSelect.value];
  selectedName.textContent = chosenAnimal.name;
  selectedImage.src = chosenAnimal.image;
  selectedImage.alt = chosenAnimal.alt;
  selectedDescription.textContent = chosenAnimal.description;
});

selectedImage.addEventListener("mouseenter", function() {
  selectedImage.classList.add("image-highlight");
});

selectedImage.addEventListener("mouseleave", function() {
  selectedImage.classList.remove("image-highlight");
});

// Task 4
const observationForm = document.querySelector("#observationForm");
const animalInput = document.querySelector("#animalInput");
const locationInput = document.querySelector("#locationInput");
const dateInput = document.querySelector("#dateInput");
const tableBody = document.querySelector("#observationTable tbody");
const formMessage = document.querySelector("#formMessage");

observationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (animalInput.value.trim() === "" || locationInput.value.trim() === "" || dateInput.value === "") {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  const newRow = document.createElement("tr");
  const animalCell = document.createElement("td");
  const locationCell = document.createElement("td");
  const dateCell = document.createElement("td");

  animalCell.textContent = animalInput.value.trim();
  locationCell.textContent = locationInput.value.trim();
  dateCell.textContent = new Date(dateInput.value + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  newRow.append(animalCell, locationCell, dateCell);
  tableBody.append(newRow);

  formMessage.textContent = "";
  observationForm.reset();
});
