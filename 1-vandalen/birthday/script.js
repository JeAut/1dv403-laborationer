"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
	    	var day = 24*60*60*1000; // Sökte fram hur man delar upp en dag i millisekunder.
        var userBirthdate = new Date(date);
        var birthMonth = userBirthdate.getMonth();
        var birthDay = userBirthdate.getDate();
        var curDate = new Date();
        var curMonth = curDate.getMonth();
        var curDays = curDate.getDate();
        var curYear = curDate.getFullYear();
        var nextYear;
        var nextDays;
        var nextMonth;
        
        if (date === "")
        {
           throw new Error("Fel! Var vänlig skriv datum på följande sätt: ÅÅÅÅ-MM-DD")
        }
        
        if (date.length <= 10)
        {
           // Om födelsedagen redan inträffat detta år.
       	   if (birthMonth == curMonth && birthDay < curDays)
           {
        	nextYear = curYear+1;
           }
           else if (birthMonth < curMonth)
           {
        	nextYear = curYear+1;
           }
           // Om nästa födelsedag är detta år.
           else
           {
        	nextYear = curYear;
           }
           
        nextMonth = birthMonth;
        nextDays = birthDay+1;
        var test = new Date(nextYear, nextMonth, nextDays);
        var diffDays = Math.floor(Math.abs(test.getTime() - curDate.getTime()) /day);
        	
        return diffDays;
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};