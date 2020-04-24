// Stampa le potenze di 2 fino a 1000

// initializing power, base case 2 ^ 0
var power = 1;

// initializing index, first index is 1
var i = 1;

// upper limit value
var max = 1000;

// while power is less than max number
while (power < max) {
    // print said power
    console.log(power);
    // power of 2 ^ index
    power = Math.pow(2, i);
    // increase index
    i++;
}
