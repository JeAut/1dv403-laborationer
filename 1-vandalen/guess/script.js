"use strict";

window.onload = function(){
	
	var min = 0;
	var max = 100;
	var secret = Math.floor( Math.random() * (max-min)+1 )+min; Math.floor( Math.random() * (100-1)+1) + 1; Math.floor( Math.random() * 100)+1;; // Detta tal behöver bytas ut mot ett slumpat tal.
       var guesses = 0;
	
	var guess = function(number){
		
	console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
	console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		guesses++;

       // if-satser för att returnera true, eller false ifall det gissade talet är högre eller lägre än det slumpade talet.
       if (number < secret)
       {
       	return [false, "Det hemliga talet är högre!"];
       }
       else if (number > secret)
       {
       	return [false, "Det hemliga talet är lägre!"];
       }
       
       // Om det gissade talet är mindre än 0, eller högre än 100.
       else if (number < min || number > max)
       {
       	return [false, "Talet är utanför intervallet 0 - 100"];
       }
       
       // Returnerar true om det gissade talet stämmer överrens med det slumpade talet.
       else 
       {
       	return [true, "Grattis du vann! Det hemliga talet var "+secret+" och du behövde "+guesses+" gissningar för att hitta det."]
       }
	};
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
		
		// 
	
	});
};