const WATER_PER_CUP = 300;
const MILK_PER_CUP = 200;
const BEAN_PER_CUP = 100;

// function expression stored to memory at compile time
// function check_maximum_cups(water, milk, bean, water_cup){
//     max_water = Math.floor(water / WATER_PER_CUP);
//     max_milk = Math.floor(milk / MILK_PER_CUP);
//     max_bean = Math.floor(bean / BEAN_PER_CUP);
//     max = Math.min(water_cup, max_water, max_milk, max_bean)
//     console.log(max);
// }

// check_maximum_cups(10000, 10000, 1000, 8);


// function expression run at runtime
const check_maximum_cups = function(water, milk, bean, water_cup){
    max_water = Math.floor(water / WATER_PER_CUP);
    max_milk = Math.floor(milk / MILK_PER_CUP);
    max_bean = Math.floor(bean / BEAN_PER_CUP);
    max = Math.min(water_cup, max_water, max_milk, max_bean)
    return max;
}

console.log(check_maximum_cups(10000, 10000, 1000, 8));