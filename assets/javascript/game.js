//There will be four crystals displayed as buttons on the page
//The player will be shown a random number at the start of the game
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score
	//Your game will hide this amount until the player clicks a crystal
	//When they do click one, update the players score counter
//The player wins if their total score matches the random number from the beginning of the game
//The player loses if their score goes above the random number
//The game restarts whenever the player wins or loses
	//When the game begins again, the player should see a new random number.  
	//Also, all the crystals will have four new hidden values.
	//Of course, the user's score (and score counter) will reset to zero
//The app should show the number of games the player wins and loses.  
//To that end, do not refresh the page as a means to restart the game.
//The random number shown at the start of the game should be between 19 and 120
//Each crystal should have a random hidden value between 1 and 12

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function() {

	$(".crystals").empty();

	random_result = Math.floor(Math.random() * 101 ) + 19;

	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;


		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});

		$(".crystals").append(crystal);

	}

	$("#previous").html("Current Value: " + previous);

}

resetAndStart();

var reset = function () {

}

$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html("Current Value: " + previous);

	console.log(previous);

	if(previous > random_result){
		lost++;
		alert("Try Again!");
		$("#lost").html("Number of Losses: " + lost);

		previous = 0;

		resetAndStart();
	}

	else if(previous === random_result){
		win++;
		alert("Success!");
		$("#win").html("Number of Wins: " + win);

		previous = 0;

		resetAndStart();
	}

});
