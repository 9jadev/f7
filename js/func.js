


var intro = document.getElementById('intro');
var play = document.getElementById('play');




//Do something if the Start Button is Clicked.
//Code to save user information
$$('#enter').on('click', function(e){
	//alert("It works!");
	var user = $$('#user').val()

	//Save users information in local storage
	//local storage use key and value
	//Key being the name you save the data as
	//Value being the data passed
	localStorage.setItem('currentUser', user);

	//call back to confirm if data is actually saved.
	var currentUser = localStorage.getItem('currentUser');

	//alert(" WELCOME "+currentUser+" TO WHO WANTS TO BE A MILLIONAIRE |Made by Chibucious|") use function() to see OK
	var gameStart = new Framework7(); //for mobile alert
	gameStart.alert("Welcome "+currentUser+"<br>Click The NewGame Section to Start.",'WWTBM',function(){

		// 	alert('Hello World!'); //browser alert

			$$('.pages').find('.page-content').html($$('.game').html());

			location.reload()



	 });

		intro.play();
});


//Function for all buttons on Game Screen
function AllButtons(){
	
	
	//For New Game
	$$('.newgame').on('click', function(e){

		$$('.pages').find('.page-content').html( $$('.third-screen').html());
		
		
	});


	//For Continue
	$$('.contbtn').on('click', function(e){

		$$('.pages').find('.page-content').html( $$('.contG').html());

	});
	//For Help
	$$('.helpbtn').on('click', function(e){

		$$('.pages').find('.page-content').html( $$('.helpG').html());

	});
	//For Challenge
	$$('.chalbtn').on('click', function(e){

		$$('.pages').find('.page-content').html( $$('.chalG').html());

	});
	//For Add Account
	$$('.chalbtn').on('click', function(e){

		$$('.pages').find('.page-content').html( $$('.chalG').html());

	});
		


}






























/*


//Code to save user information
$$('#enter').on('click', function(e){
	//alert("It works!");
	var user = $$('#user').val()

	//Save users information in local storage
	//local storage use key and value
	//Key being the name you save the data as
	//Value being the data passed
	localStorage.setItem('currentUser', user);

	//call back to confirm if data is actually saved.
	var currentUser = localStorage.getItem('currentUser');

	//alert(" WELCOME "+currentUser+" TO WHO WANTS TO BE A MILLIONAIRE |Made by Chibucious|") use function() to see OK
	var gameStart = new Framework7(); //for mobile alert
	gameStart.alert("Welcome "+currentUser+"<br>Click The NewGame Section to Start.",'WWTBM',function(){

		// 	alert('Hello World!'); //browser alert

			$$('.pages').find('.page-content').html($$('.game').html());

			location.reload()



	 });


});


$$('.newgame').on('click', function(e){  //this takes you from game to third page
	$$('.default').html(

		$$('.third-screen').html()

	);
});


//go back to top and add localStorage.getItem('currentUser') to check if there is current user

//to delete a signed in person

//localStorage.removeItem('currentUser');  //This would delete current user // this place this place




/////////////////Switching to third screen ////////////////



*/

