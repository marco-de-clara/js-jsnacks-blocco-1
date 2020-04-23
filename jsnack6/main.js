// Stampa le potenze di 2 fino a 1000

// initializing index
var i = 0;

//initializing power
var power = 0;

// upper limit value
var max = 1000;

// while power is less than max number
while (power < max) {
    // power of 2 ^ index
    power = Math.pow(2, i);
    // if power is less than max number
    if (power < max) {
        // print said power
        console.log(power);
    }
    // increase index
    i++;
}
