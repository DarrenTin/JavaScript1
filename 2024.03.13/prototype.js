const car = {
    name: "Lamborgini",
    year: 2024,
    available: true,
    car1: () => {
        console.log("happy");
    },
    camry: {speed: 1000},
}

for(let prop in car){
    console.log(typeof car[prop]);
}

for(let prop of car['name']){
    console.log(prop);
}