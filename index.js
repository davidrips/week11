var prompt = require('prompt');

var Bus = require('./bus.js');

// prompt.start();

var aBus = new Bus('John', 'red', 'full');

aBus.studentEntersBus('Jack','m','3', 1, 10, 'no', 'Jack shouldnt');
aBus.studentEntersBus('Jane','f','3', 3, 9, 'no', 'jane should');
aBus.studentEntersBus('John','f','3', 4, 9, 'no', 'john should');
aBus.studentEntersBus('Janet','f','3', 1, 10, 'no', 'janet shouldnt?');
aBus.studentEntersBus('Luke','m','3', 2, 9, 'no', 'luke should');
aBus.studentEntersBus('Lucy','m','3', 2, 11, 'no', 'lucy shouldnt');
aBus.studentEntersBus('Riley','f','3', 1, 10, 'no', 'riley shouldnt');
aBus.studentEntersBus('Morgan','f','3', 5, 12, 'no', 'morgan shouldnt');
aBus.studentEntersBus('Megan','m','3', 4, 8, 'no', 'megan should');

console.log(aBus);
aBus.busChatter();

prompt.start();