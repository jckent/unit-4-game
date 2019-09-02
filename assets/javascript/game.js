let goal;
let counter = 0;
let wins= 0;
let losses = 0;
let crystalValues = [];

// code for random array values,
crystalValues = Array.from({length: 4}, () => Math.floor(Math.random() * (120 - 19 + 1)));

//rng for goal

Math.floor(Math.random() * (12 - 1 + 1)) + min;

// adding button vals to counter
$('.button').on('click', function() {
let crystalValue= ($(this).attr('data-crystalvalue'));
crystalValue=parseInt(crystalValue);
counter+= crystalValue;
});

//generic win/loss logic
if (counter === goal) {
    alert("You win!");
    wins++;
  }

  else if (counter >= goal) {
    alert("You lose!!");
    losses++;
  }

});