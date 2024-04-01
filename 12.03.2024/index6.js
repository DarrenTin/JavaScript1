const meals = [
    {id: 1, description: 'breakfast', calories: 450},
    {id: 2, description: 'lunch', calories: 350},
    {id: 3, description: 'dinner', calories: 250},
]

// console.log(meals[0].description) // breakfast
// console.log(meals[1]['description']) // lunch

const meal = {
    id: 4,
    description: "supper", 
    calories: 150,
}


// spread operator
const updatedMeals = [...meals, meal];
const updatedMealsDescription = updatedMeals.map(updatedDescription);

function updatedDescription(meal) {
    if(meal.id === 2){
        return {
            ...meal,
            description: 'early lunch', 
        }
    }
    return meal
}


console.log(updatedMealsDescription)