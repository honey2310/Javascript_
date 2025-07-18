const defaultRecipes = [
    {
      title: "Spaghetti Aglio e Olio",
      ingredients: ["spaghetti", "garlic", "olive oil", "chili flakes", "parsley"],
      instructions: "Cook pasta, sauté garlic in oil, mix with pasta and herbs.",
      cuisineType: "Italian",
      image: "https://images.unsplash.com/photo-1675169594106-a3898f9fe59d?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Chicken Tikka",
      ingredients: ["chicken", "yogurt", "spices", "lemon juice", "garlic"],
      instructions: "Marinate chicken, grill until cooked.",
      cuisineType: "Indian",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Sushi Roll",
      ingredients: ["rice", "nori", "fish", "vegetables", "soy sauce"],
      instructions: "Spread rice on nori, add fillings, roll and slice.",
      cuisineType: "Japanese",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Tacos",
      ingredients: ["tortilla", "beef", "lettuce", "cheese", "salsa"],
      instructions: "Cook beef, fill tortillas with toppings.",
      cuisineType: "Mexican",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Tom Yum Soup",
      ingredients: ["shrimp", "lemongrass", "lime", "chilies", "mushrooms"],
      instructions: "Boil broth, add ingredients, simmer and serve.",
      cuisineType: "Thai",
      image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "French Toast",
      ingredients: ["bread", "eggs", "milk", "sugar", "cinnamon"],
      instructions: "Dip bread in mixture, fry until golden.",
      cuisineType: "American",
      image: "https://images.unsplash.com/photo-1573057377537-dbb3a99ac4b9?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Falafel",
      ingredients: ["chickpeas", "garlic", "onion", "herbs", "spices"],
      instructions: "Blend ingredients, form balls, fry.",
      cuisineType: "Middle Eastern",
      image: "https://plus.unsplash.com/premium_photo-1668618295652-4dab74ecd966?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Pad Thai",
      ingredients: ["rice noodles", "tofu", "egg", "peanuts", "tamarind"],
      instructions: "Stir-fry all ingredients in sauce.",
      cuisineType: "Thai",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Bibimbap",
      ingredients: ["rice", "vegetables", "beef", "egg", "gochujang"],
      instructions: "Arrange ingredients over rice, serve with sauce.",
      cuisineType: "Korean",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=900&auto=format&fit=crop&q=60"
    },
    {
      title: "Caesar Salad",
      ingredients: ["lettuce", "croutons", "parmesan", "anchovy", "dressing"],
      instructions: "Toss all ingredients with Caesar dressing.",
      cuisineType: "Italian-American",
      image: "https://media.istockphoto.com/id/1338803225/photo/chicken-caesar-salad-with-the-classic-dressing-being-poured-and-croutons.webp"
    }
  ];
  
  // Load recipes from localStorage or initialize with default
  if (!localStorage.getItem("recipes")) {
    localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
  }
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  
  function saveToLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
  
  function DisplayRecipes() {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
  
    recipes.forEach((recipe, index) => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded-lg shadow-md";
  
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover rounded mb-2">
        <h3 class="text-lg font-semibold mb-1">${recipe.title}</h3>
        <p><strong>Cuisine:</strong> ${recipe.cuisineType}</p>
        <p><strong>Ingredients:</strong> ${Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}</p>
        <div class="flex justify-end gap-2 mt-4">
          <button onclick="editRecipe(${index})" class="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
          <button onclick="deleteRecipe(${index})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
        </div>
      `;
  
      recipeList.appendChild(card);
    });
  }
  
  function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById("recipeId").value = index;
    document.getElementById("title").value = recipe.title;
    document.getElementById("imageUrl").value = recipe.image;
    document.getElementById("ingredients").value = Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients;
    document.getElementById("cuisine").value = recipe.cuisineType;
    document.getElementById("formTitle").textContent = "Edit Recipe";
  }
  
  function deleteRecipe(index) {
    if (confirm("Are you sure you want to delete this recipe?")) {
      recipes.splice(index, 1);
      saveToLocalStorage();
      DisplayRecipes();
    }
  }
  
  document.getElementById("recipeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const image = document.getElementById("imageUrl").value || "https://via.placeholder.com/300x200";
    const ingredients = document.getElementById("ingredients").value.split(",").map(i => i.trim());
    const cuisine = document.getElementById("cuisine").value;
    const id = document.getElementById("recipeId").value;
  
    const newRecipe = { title, image, ingredients, cuisineType: cuisine };
  
    if (id) {
      recipes[id] = newRecipe;
      document.getElementById("formTitle").textContent = "Add New Recipe";
    } else {
      recipes.unshift(newRecipe);
    }
  
    saveToLocalStorage();
    DisplayRecipes();
    this.reset();
    document.getElementById("recipeId").value = "";
  });
  
  function resetRecipes() {
    localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
    location.reload();
  }
  
  DisplayRecipes();
  