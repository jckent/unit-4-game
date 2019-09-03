$( document ).ready(function(){
//vars
let goal;
let counter = 0;
let wins= 0;
let losses = 0;
//random number for the goal value and appending to the right place in html
goal = Math.floor(Math.random()*101+19);

$('#goalNum').text(goal);
//random numbers for each crystal
let crystal1= Math.floor(Math.random()*11+1);
let crystal2= Math.floor(Math.random()*11+1);
let crystal3= Math.floor(Math.random()*11+1);
let crystal4= Math.floor(Math.random()*11+1);
//puts the counter in the right html spot
$('#score').text(counter);

//sets up onclick event for jewels
$('#crystal1').on('click', function(){
    counter = counter + crystal1;
      $('#score').text(counter); 
          //sets win/lose conditions
        if (counter == goal){
          youWin();
        }
        else if (counter > goal){
          youLose();
        }   
  });  
  $('#crystal2').on('click', function(){
    counter = counter + crystal2;
      $('#score').text(counter); 
          //sets win/lose conditions
        if (counter == goal){
          youWin();
        }
        else if (counter > goal){
          youLose();
        }   
  });  
  $('#crystal3').on('click', function(){
    counter = counter + crystal3;
      $('#score').text(counter); 
          //sets win/lose conditions
        if (counter == goal){
          youWin();
        }
        else if (counter > goal){
          youLose();
        }   
  });
  $('#crystal4').on('click', function(){
    counter = counter + crystal4;
      $('#score').text(counter); 
          //sets win/lose conditions
        if (counter == goal){
          youWin();
        }
        else if (counter > goal){
          youLose();
        }   
    });

//functions for win/loss
function youWin () {
    alert("You win!");
    wins++;
    $('#winner').text(wins);
    
  }

  function youLose ()  {
    alert("You lose!!");
    losses++;
    $('#loser').text(losses);
  }
});
