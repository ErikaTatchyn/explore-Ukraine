// Defined an object with detailed information about cities in Ukraine
const ukraineCities = {
  kyiv: {
    name: "Kyiv",
    description:
      "Kyiv is the capital and largest city of Ukraine, known for its rich history and vibrant culture. It is situated along the Dnipro River and is home to many historical landmarks and museums.",
    population: "2.8 million",
    area: "839 square kilometers",
    image: "images/kyiv.jpeg", // Added the path to the city image
  },
  lviv: {
    name: "Lviv",
    description:
      "Lviv is a beautiful city in western Ukraine, famous for its charming old town and historic architecture. It is often called the 'Little Paris of Ukraine.'",
    population: "724,314",
    area: "182 square kilometers",
    image: "images/lviv.jpg", // Added the path to the city image
  },
  odesa: {
    name: "Odesa",
    description:
      "Odesa is a port city on the Black Sea coast, known for its beaches and maritime heritage. It is a popular tourist destination.",
    population: "993,120",
    area: "236 square kilometers",
    image: "images/odesa.jpeg", // Added the path to the city image
  },
  kharkiv: {
    name: "Kharkiv",
    description:
      "Kharkiv is the second-largest city in Ukraine, renowned for its academic institutions and parks. It is located in the northeastern part of the country.",
    population: "1.4 million",
    area: "350 square kilometers",
    image: "images/kharkiv.jpeg", // Added the path to the city image
  },
};

// Function to display city information
function displayCityInfo(cityName) {
  const city = ukraineCities[cityName];
  if (city) {
    const cityInfo = `<h2>${city.name}</h2>
                        <p>${city.description}</p>
                        <p>Population: ${city.population}</p>
                        <p>Area: ${city.area}</p>`;
    document.getElementById("city-info").innerHTML = cityInfo;

    // Display the city image
    document.getElementById(
      "city-pictures"
    ).innerHTML = `<img src="${city.image}" alt="${city.name}" class="city-image">`;
  } else {
    document.getElementById("city-info").innerHTML = "<p>City not found.</p>";
    document.getElementById("city-pictures").innerHTML = ""; // Clear the city image if city not found
  }
}

// Event listener for the Explore button
document
  .getElementById("explore-button")
  .addEventListener("click", function () {
    const selectedCity = document.getElementById("city-select").value;
    displayCityInfo(selectedCity);
  });

// console.log to display a message
console.log("Welcome to Explore Ukraine!");

// alert to display a message
alert("Get ready to explore Ukraine!");

// a loop to reduce repetition (e.g., for populating the dropdown)
const citySelect = document.getElementById("city-select");
for (const city in ukraineCities) {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = ukraineCities[city].name;
  citySelect.appendChild(option);
}

// boolean values and if..else statements to branch logic
const isUkraineFan = confirm("Are you a fan of Ukraine?");
if (isUkraineFan) {
  alert("Great! Let's explore Ukraine together.");
} else {
  alert("No worries! You can still explore Ukraine with us.");
}
