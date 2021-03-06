const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Ingredients list:");

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
let revArray = [];
for (let i = 0; i < ingredients.length; i++) {
  revArray.unshift(ingredients[i]);
}

console.log(revArray);