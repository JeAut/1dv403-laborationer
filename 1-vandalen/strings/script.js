"use strict";

window.onload = function(){

	var convertString = function(str){
    
    var alg = "";
    
    if (str.length > 0)
    {
    for (var i = 0; i < str.length; i++)
    {
    if (str.charCodeAt(i) > 65 && str.charCodeAt(i) < 90 || str.charCodeAt(i) > 196 && str.charCodeAt(i) < 214)
    {
    	alg = alg + str.charAt(i).toLowerCase().replace("a","#");
    }
    else
    		
    	alg = alg + str.charAt(i).toUpperCase().replace("A","#");
    }
    	return alg;
    	
    }
    else
    {
    	return "Fel! Du har inte skrivit något."
    }

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};