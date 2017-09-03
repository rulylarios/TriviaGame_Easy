var correct = 0;
var incorrect = 0;
var timeLeft = 60;
var seconds = 1;
var unanswered = 8;

window.onload = function(){
	
	$("#start").html("<button type='button' class='btn btn-default' id='startButton'>Start</button>");

	$("#start").on("click", function(){
		$("#question1").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>What NFL team does Marshawn Lynch play for?</div> </div><div class='row'><button class='col-md-3 incorrect'>A) Los Angeles Lakers</button><button class='col-md-3 incorrect'>B) Seattle Seahawks</button><button class='col-md-3 incorrect'>C) Atlanta Falcons</button><button class='col-md-3 correct'>D) Oakland Raiders</button></div></div><br>")
		$("#question2").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>How many championships did Michael Jordan win?</div> </div><div class='row'><button class='col-md-3 incorrect'>A) Two</button><button class='col-md-3 incorrect'>B) Three</button><button class='col-md-3 incorrect'>C) Four</button><button class='col-md-3 correct'>D) Five</button></div></div><br>")
		$("#question3").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>Which city were the Olypmics of 1968 played in?</div> </div><div class='row'><button class='col-md-3 incorrect'>A) Rio de Janeiro</button><button class='col-md-3 correct'>B) Mexico City</button><button class='col-md-3 incorrect'>C) Berlin</button><button class='col-md-3 incorrect'>D) Athens</button></div></div><br>")
		$("#question4").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>Which country won the first World Cup?</div> </div><div class='row'><button class='col-md-3 correct'>A) Uruguay</button><button class='col-md-3 incorrect'>B) Brazil</button><button class='col-md-3 incorrect'>C) Italy</button><button class='col-md-3 incorrect'>D) Argentina</button></div></div><br>")
		$("#question5").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>Which NFL team has won the most Superbowls?</div> </div><div class='row'><button class='col-md-3 incorrect'>A) New England Patriots</button><button class='col-md-3 correct'>B) Pittsburgh Steelers</button><button class='col-md-3 incorrect'>C) Green Bay Packers</button><button class='col-md-3 incorrect'>D) Dallas Cowboys</button></div></div><br>")
		$("#question6").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>Which team in the MLB has won The World Series the most?</div> </div><div class='row'><button class='col-md-3 incorrect'>A) Boston Red Sox</button><button class='col-md-3 incorrect'>B) Oakland Athletics</button><button class='col-md-3 correct'>C) New York Yankees</button><button class='col-md-3 incorrect'>D) Texas Rangers</button></div></div><br>")
		$("#question7").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>Which NHL team has won the Stanley Cup the most?</div> </div><div class='row'><button class='col-md-3 correct'>A) Montreal Canadiens</button><button class='col-md-3 incorrect'>B) Detroit Red Wings</button><button class='col-md-3 incorrect'>C) Toronto Maple Leafs</button><button class='col-md-3 incorrect'>D) Chicago Blackhawks</button></div></div><br>")
		$("#question8").html("<div class='container-fluid'> <div class='row'> <div class='col-md-12'>In which round of the 2000 draft was Tom Brady selected?</div> </div><div class='row'><button class='col-md-3 incorrect'>A) First</button><button class='col-md-3 incorrect'>B) Second</button><button class='col-md-3 incorrect'>C) Fourth</button><button class='col-md-3 correct'>D) Sixth</button></div></div><br>")
		$("#start").html("")

		var timer = setInterval(function(){
		timeLeft--;
		$("#timeRemaining").html("<div>Time Remaining: " + timeLeft + "</div")
		if(timeLeft === 0){
			unanswered = unanswered - (correct + incorrect);
			$("#timeRemaining").html("<div>Time Remaining: " + timeLeft + "</div");
			$("#question1").html("<div class='score'>Time is Up!</div>");
			$("#question2").html("<div class='score'>Here's How You Did: </div>");
			$("#question3").html("<div class='score'>Correct Answers: " + correct + "</div");
			$("#question4").html("<div class='score'>Incorrect Answers: " + incorrect + "</div");
			$("#question5").html("<div class='score'>Unanswered: " + unanswered + "</div");
			$("#question6").html(" ")
			$("#question7").html(" ")
			$("#question8").html(" ")
			clearInterval(timer);
				
				


		}
		},1000);
		
		$(".col-md-3.correct").on("click", function(){
			correct++;
			console.log(correct);
			if(correct + incorrect === 8){
				$("#timeRemaining").html("<div>Time Remaining: " + timeLeft + "</div");
				$("#question1").html("<div class='score'>All Done!</div>");
				$("#question2").html("<div class='score'>Here's How You Did: </div>");
				$("#question3").html("<div class='score'>Correct Answers: " + correct + "</div");
				$("#question4").html("<div class='score'>Incorrect Answers: " + incorrect + "</div");
				$("#question5").html("<div class='score'>Unanswered: " + unanswered + "</div");
				$("#question6").html(" ")
				$("#question7").html(" ")
				$("#question8").html(" ")
				clearInterval(timer);
				

	}
		})

		$(".col-md-3.incorrect").on("click", function(){
			incorrect++;
			console.log(incorrect)
			if(correct + incorrect === 8){
			$("#timeRemaining").html("<div>Time Remaining: " + timeLeft + "</div");
				$("#timeRemaining").html("<div>Time Remaining: " + timeLeft + "</div");
				$("#question1").html("<div class='score'>All Done!</div>");
				$("#question2").html("<div class='score'>Here's How You Did: </div>");
				$("#question3").html("<div class='score'>Correct Answers: " + correct + "</div");
				$("#question4").html("<div class='score'>Incorrect Answers: " + incorrect + "</div");
				$("#question5").html("<div class='score'>Unanswered: " + unanswered + "</div");
				$("#question6").html(" ")
				$("#question7").html(" ")
				$("#question8").html(" ")
				clearInterval(timer);
	}
		})
	

	})

}



