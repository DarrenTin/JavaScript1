const expresso = {
    water: 250,
    milk: 125,
    bean: 16,
    cost: 550,
    animation_color: "red",
};

const latte = {
    water: 350,
    milk: 175,
    bean: 10,
    cost: 400,
    animation_color: "yellow",
};

const capuccinno = {
    water: 500,
    milk: 250,
    bean: 20,
    cost: 750,
    animation_color: "green",
};

const coffeemachine = {
    water: 3000,
    milk: 1500,
    bean: 16,
    disposableCups: 9,
    money: 550,
};

console.log(`The coffee machine has:
${coffeemachine.water} ml of water
${coffeemachine.milk} ml of milk
${coffeemachine.bean} g of coffee beans
${coffeemachine.disposableCups} disposable cups
${coffeemachine.money} of money`);

const action = prompt("Write action (buy, fill, take):")

if(action === "buy"){

}
else if(action === "fill"){

}
else if(action === "take"){

}
else{
    console.log("Invalid")
}