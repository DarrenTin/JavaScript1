var name = prompt('Enter name:');
var surname = prompt('Enter surname:');
var message = prompt('Enter message:');
var repeat = prompt('Enter number of repeat:');
var pro = (name, surname, message, repeat) => {
    for(i=0; i<repeat; i++){
        console.log(`
        This is ${name} ${surname} and ${message}.
        `)
    }   
}

pro(name, surname, message, repeat);
