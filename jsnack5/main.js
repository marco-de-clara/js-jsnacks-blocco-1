// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

// ask for an integer

var max = parseInt(prompt("Please enter a whole number: "));

// iterations from 0 to given max number
for (var i = 0; i < max; i++) {
    // cube number of index
    var cube = Math.pow(i, 3);
    // print said cube number
    console.log(cube);
}
