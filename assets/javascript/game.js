let goal;
let counter = 0;
let wins= 0;
let losses = 0;
let crystalValues = [];

// code for random array values, still needs to be limited to correct number range
Array.from({length: 4}, () => Math.floor(Math.random() * ));


// adding button vals to counter
$('.button').on('click', function() {
let crystalValue= ($(this).attr('data-crystalvalue'));
crystalValue=parseInt(crystalValue);
counter+= crystalValue
});