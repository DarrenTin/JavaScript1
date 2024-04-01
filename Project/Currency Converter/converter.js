currencies = {
    USD: 1,
    JPN: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
}

program = function(){
    var type = prompt("Type currency to convert:")
    var amount = prompt("Amount:")
    var to = prompt("To:")

    if(typeof(currencies[type]) === 'undefined'){
        console.log("Unknown currency")
    }

    var result = (amount / currencies[type]) * currencies[to];

    console.log(`From> ${amount} ${type}`)
    console.log(`To> ${to}`)
    console.log(`Result> ${result.toFixed(2)} ${to}`);
}

var todo = prompt(`
Welcome to Currency Converter!
1 USD equals ${currencies.USD} USD
1 USD equals ${currencies.JPN} JPY
1 USD equals ${currencies.EUR} EUR
1 USD equals ${currencies.RUB} RUB
1 USD equals ${currencies.GBP} GBP
What do you want to do?
1-Convert 2-Exit
`)

while(todo !== '2'){
    if(todo === '1'){
        program();
    }
    else if(todo === '2'){
        break;
    }
    else{
        console.log('invalid todo');
    }
    todo = prompt(`
    What do you want to do?
    1-Convert 2-Exit
    `)
};

console.log('exit program');