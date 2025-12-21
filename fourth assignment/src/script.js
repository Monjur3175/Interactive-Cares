// Meal Finder App
const apiUrl = "https://www.themealdb.com/api/json/v1/1";
let meals = [];

// Get all the elements we need
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const mealGrid = document.getElementById("mealGrid");
const modal = document.getElementById("mealModal");
const closeBtn = document.getElementById("closeModal");

// Load random meals when page loads
window.addEventListener('DOMContentLoaded', function() {
  loadRandomMeals();
});

// Search button click
searchBtn.addEventListener("click", function() {
  searchMeals();
});

// Press enter to search
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchMeals();
  }
});

// Close modal
closeBtn.addEventListener("click", function() {
  modal.classList.add("hidden");
});

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Function to fetch from API
async function fetchFromAPI(endpoint) {
  try {
      
      const response = await fetch(apiUrl + "/" + endpoint);
      const data = await response.json();
      mealGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-600 text-xl">Loading...</div>';
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    mealGrid.innerHTML = '<div class="col-span-full text-center py-10 text-red-600">Something went wrong. Try again!</div>';
    return null;
  }
}

// Search for meals
async function searchMeals() {
  const term = searchInput.value.trim();
  
  if (!term) {
    loadRandomMeals();
    return;
  }

  const data = await fetchFromAPI("search.php?s=" + term);
  
  if (data && data.meals) {
    meals = data.meals;
    showMeals();
  } else {
    mealGrid.innerHTML = `
      <div class="col-span-full text-center py-10">
        <p class="text-gray-600 text-xl mb-5">No meals found. Try something else!</p>
        <button onclick="loadRandomMeals()" class="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
          Show Random Meals
        </button>
      </div>
    `;
  }
}

// Load random meals
async function loadRandomMeals() {
  let randomMeals = [];
  
  // Get 8 random meals
  for (let i = 0; i < 8; i++) {
    const data = await fetchFromAPI("random.php");
    if (data && data.meals) {
      randomMeals.push(data.meals[0]);
    }
  }
  
  meals = randomMeals;
  showMeals();
}

// Display meals on the page
function showMeals() {
  if (!meals || meals.length === 0) {
    mealGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-600">No meals to show</div>';
    return;
  }

  mealGrid.innerHTML = "";

  meals.forEach(function(meal) {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer";
    
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-48 object-cover">
      <div class="p-5">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">${meal.strMeal}</h3>
        <span class="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mb-2">${meal.strCategory}</span>
        <span class="inline-block bg-red-200 text-red-700 px-3 py-1 rounded-full text-sm ml-2">${meal.strArea}</span>
      </div>
    `;

    card.addEventListener("click", function() {
      showModal(meal);
    });

    mealGrid.appendChild(card);
  });
}

// Show meal details in modal
function showModal(meal) {
  const modalContent = document.getElementById("modalContent");
  
  // Get all ingredients
  let ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal["strIngredient" + i];
    const measure = meal["strMeasure" + i];
    
    if (ingredient && ingredient.trim()) {
      ingredientsList.push({
        name: ingredient.trim(),
        amount: measure ? measure.trim() : "To taste"
      });
    }
  }

  // Build the ingredients HTML
  let ingredientsHTML = "";
  ingredientsList.forEach(function(ing) {
    ingredientsHTML += `
      <div class="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
        <strong class="block text-gray-800">${ing.name}</strong>
        <div class="text-gray-600 text-sm">${ing.amount}</div>
      </div>
    `;
  });

  // Split instructions into paragraphs
  let instructions = meal.strInstructions.split("\r\n");
  let instructionsHTML = "";
  instructions.forEach(function(step) {
    if (step.trim()) {
      instructionsHTML += "<p>" + step + "</p>";
    }
  });

  modalContent.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-80 object-cover">
    <div class="p-8">
      <h2 class="text-4xl font-bold mb-5 text-gray-800">${meal.strMeal}</h2>
      
      <div class="flex gap-3 mb-6 flex-wrap">
        <span class="bg-purple-200 text-gray-700 px-3 py-1 rounded-full">${meal.strCategory}</span>
        <span class="bg-green-200 text-gray-700 px-3 py-1 rounded-full">${meal.strArea}</span>
        ${meal.strTags ? '<span class="bg-red-200 text-red-700 px-3 py-1 rounded-full">' + meal.strTags + '</span>' : ''}
      </div>
      
      <h3 class="text-2xl font-semibold mb-4">Ingredients</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        ${ingredientsHTML}
      </div>
      
      <h3 class="text-2xl font-semibold mb-4">Instructions</h3>
      <div class="text-gray-700 leading-relaxed space-y-4">
        ${instructionsHTML}
      </div>
      
      ${meal.strYoutube ? `
        <div class="mt-8">
          <h3 class="text-2xl font-semibold mb-3">Video Tutorial</h3>
          <a href="${meal.strYoutube}" target="_blank" class="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Watch on YouTube
          </a>
        </div>
      ` : ''}
      
      ${meal.strSource ? `
        <div class="mt-6">
          <a href="${meal.strSource}" target="_blank" class="text-purple-600 hover:text-purple-700 underline">
            View Original Recipe
          </a>
        </div>
      ` : ''}
    </div>
  `;

  modal.classList.remove("hidden");
}

// Scroll to top button
const topBtn = document.getElementById("topbtn");

window.onscroll = function() {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};