

		$( document ).ready(function() {
			
			var playerScore = 0
			var randomNum = 0
			var wins = 0
			var losses = 0 
			var crystal1 = 0
			var crystal2 = 0
			var crystal3 = 0
			var crystal4 = 0
			
			var gameStart = function(){

				crystal1 = Math.floor((Math.random() * 12) + 1);
				crystal2 = Math.floor((Math.random() * 12) + 1);
				crystal3 = Math.floor((Math.random() * 12) + 1);
				crystal4 = Math.floor((Math.random() * 12) + 1);

				randomNum = Math.floor((Math.random() * 108) + 17);
				$("#randomNum").text(randomNum);

				playerScore = 0
				$("#player_score").text(" " + playerScore);



				console.log(crystal1);
				console.log(crystal2);
				console.log(crystal3);
				console.log(crystal4);
				console.log(randomNum);

			};



			gameStart();



			$("#amethyst").click(function(){
				playerScore = playerScore + crystal1;
				$("#player_score").text(" " + playerScore);
				compare();
			});

			$("#diamond").click(function(){
				playerScore = playerScore + crystal2;
				$("#player_score").text(" " + playerScore);
				compare();
			});

			$("#yellow_diamond").click(function(){
				playerScore = playerScore + crystal3;
				$("#player_score").text(" " + playerScore);
				compare();
			});

			$("#emerald").click(function(){
				playerScore = playerScore + crystal4;
				$("#player_score").text(" " + playerScore);
				compare();
			});

    		
			var compare = function(){
    			if(playerScore > randomNum){
    				alert("Sorry, try again!");
    				losses = losses + 1
    				$("#losses").text(losses);
    				gameStart();
    				
    			}
    			if (playerScore === randomNum){
    				alert("Winner, winner chicken dinner!");
    				wins = wins + 1
    				$("#wins").text(wins);
    				gameStart();
    			}	
    		};


		});
