//What my program needs to do 
//1. Give the user a goal number selected at random between 20 and 100 and send it to html
//2. Give values to all four crystals 
//3. Add values up each time a button is clicked and send it to the html
//4. If the user hits the value, let them know they won, and add a win to the win counter
//5. If the user goes over the value, let them know they lost and add a loss to the loss counter
//6. Make sure the game starts over when the user wins or loses
// possible extras, make sure all numbers aren't odd or even so game can always be won



// Need variable to hold values throughout the game
// Need goal score, current score,  wins, losses, each crystals value
var goal;
var score;
var wins = 0;
var losses = 0;
var opal;
var saphire;
var emerald;
var ruby; 
var equal = true;

// Create a function that gives the crystals a number value and sets the goal score
function setValues(){
		goal = Math.floor(Math.random()*101) + 19;
		$("#goalScore").text(goal);

		opal = Math.floor(Math.random() * 12) + 1;

		saphire = Math.floor(Math.random() * 12) + 1;
		if(saphire === opal){
			while(saphire === opal){
				saphire = Math.floor(Math.random() * 12) + 1;
			}

		}
		emerald = Math.floor(Math.random() * 12) + 1;
		if(emerald === opal || emerald === saphire){
			while(emerald === opal || emerald === saphire){
				emerald = Math.floor(Math.random() * 12) + 1;
			}
		}

		ruby = Math.floor(Math.random() * 12) + 1;
		if(ruby === saphire || ruby === opal || ruby === emerald){
			while(ruby === saphire || ruby === opal || ruby === emerald){
				ruby = Math.floor(Math.random() * 12) + 1;
			}
		}
		score = 0;
		$("#totalScore").text(score);
}

	//use jquery to create on click functions so the buttons add to the score

      $("#emerald").on("click", function() {
        score += emerald;
        $("#totalScore").text(score);
        if(score === goal){
        	wins++;
        	$("#wins").text(wins);
        	$("#result").text("YOU WIN!");
        	setValues();
        }
        else if(score > goal){
        	losses++;
        	$("#losses").text(losses);
        	$("#result").text("YOU LOSE!");
        	setValues();
        }
      });
      $("#opal").on("click", function() {
        score += opal;
        $("#totalScore").text(score);
        if(score === goal){
        	wins++;
        	$("#wins").text(wins);
        	$("#result").text("YOU WIN!");
        	setValues();
        }
        else if(score > goal){
        	losses++;
        	$("#losses").text(losses);
        	$("#result").text("YOU LOSE!");
        	setValues();
        }
      });
      $("#ruby").on("click", function() {
        score += ruby;
        $("#totalScore").text(score);
        if(score === goal){
        	wins++;
        	$("#wins").text(wins);
        	$("#result").text("YOU WIN!");
        	setValues();
        }
        else if(score > goal){
        	losses++;
        	$("#losses").text(losses);
        	$("#result").text("YOU LOSE!");
        	setValues();
        }
      });
      $("#saphire").on("click", function() {
        score += saphire;
        $("#totalScore").text(score);
        if(score === goal){
        	wins++;
        	$("#wins").text(wins);
        	$("#result").text("YOU WIN!");
        	setValues();
        }
        else if(score > goal){
        	losses++;
        	$("#losses").text(losses);
        	$("#result").text("YOU LOSE!");
        	setValues();
        }
      });
setValues();


// console.log(goal);
// console.log(opal);
// console.log(ruby);
// console.log(emerald);
// console.log(saphire);





