// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

// Input Format

// There are  lines of numeric input:
// The first line has a double,  (the cost of the meal before tax and tip).
// The second line has an integer,  (the percentage of  being added as tip).
// The third line has an integer,  (the percentage of  being added as tax).

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    
    let tip = (meal_cost * tip_percent /100);
    let tax = (meal_cost * tax_percent / 100);
    let totalCost = Math.round(meal_cost + tip + tax);

    console.log( totalCost );

}