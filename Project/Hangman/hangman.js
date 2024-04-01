console.log(`H A N G M A N
The game will be available soon`);

const word = ['P','Y','T','H','O','N'];
var reveal = ['-','-','-','-','-','-'];
var attempt = 10;

for(i=0; i<attempt; i++){
    var guess = prompt('Guess:');
    if(word.includes(guess)){
        index = word.indexOf(guess);
        reveal[index] = guess;
    }
    console.log(`${reveal.join('')} //${attempt - i} attempt left`);
    if(word.join('') === reveal.join('')) break;
}