"use strict";
console.log("labbyMezzage loaded");

var labbyMezzage = {

    init: function () 
    {
        var buttonPost = document.getElementById("button");
        
        
        var entersend = document.getElementById("messageInput");
        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey && document.getElementById("messageInput").value !== ""){
                e.preventDefault();
                labbyMezzage.postMessage();
                }
                if (e.keyCode == 13 && document.getElementById("messageInput").value === "")
                {e.preventDefault()}
                
        };
        buttonPost.onclick = labbyMezzage.postMessage;
    },

    postMessage: function ()
    {
        createMessageObjekt();
        renderLatestMessage();

        function createMessageObjekt()
        {
            
            var textarea = document.getElementById("messageInput");
            labbyMezzage.messages.push( new Message( textarea.value, new Date()));

        }
        
    
        function renderLatestMessage()
        {
            
		var post = document.createElement("div");
		
		var postFunction = document.createElement("div");
	
		var imgTime = document.createElement("a");
		var aTime = document.createElement("a");
	
	
		
		
		post.setAttribute("class", "post");
		postFunction.setAttribute("class", "postFunction");
	
	
		imgTime.setAttribute("src", "pics/clock.png");
		imgTime.setAttribute("alt", "a klock");
	
		aTime.setAttribute("href", "#");
	
		
		
		
            var lastMessageId = labbyMezzage.messages.length - 1;

            var messageBoard = document.getElementById("messageBoard");

            var message = document.createElement("article");
            message.setAttribute("class", "message");
            var time = document.createElement("time");
            var p = document.createElement("p");

            // Skapa ta-bort knapp på meddelandet
            var buttonRemove = document.createElement("a");
            buttonRemove.setAttribute("href", "#");
            buttonRemove.innerHTML = '<img src="delete.png" width="24px" height="24px" />';
            buttonRemove.addEventListener("click", labbyMezzage.removeMessage, false);
            message.appendChild(buttonRemove);

        
//Time and date image
		   
	     	aTime.appendChild(imgTime);
            message.appendChild(time);
            
		aTime.onclick = function(e){
		   var imgTime = document.createElement("a");
		   imgTime.setAttribute("src", "clock.png");
			e.preventDefault();
			labbyMezzage.showTime(lastMessageId);
			alert(labbyMezzage.messages[lastMessageId].toString());
		},

            
            time.setAttribute("datetime", labbyMezzage.messages[lastMessageId].getDateStringUTC());

            time.innerHTML = labbyMezzage.messages[lastMessageId].getClockStringLocal();
            p.innerHTML = labbyMezzage.messages[lastMessageId].getText();

            
            message.appendChild(p);
            messageBoard.appendChild(message);
        }
    },

    removeMessage: function(lastMessageId)
    {
        var messageBoard = document.getElementById("messageBoard");
        var messageClicked = this.parentNode;
		var result = confirm("Är du säker på att du vill radera detta meddelande");
        if (result===true) {
        var messageNumber = labbyMezzage.getMessageNumber(messageClicked);
        messageBoard.removeChild(messageBoard.childNodes[messageNumber]);
            }
    },
    
   

    getMessageNumber: function(messageClicked)
    {
        var message = document.querySelector(".message");
        var count = 0;

        while (message)
        {
            if (message == messageClicked)
            {
                return count;
            }

            count++;
            message = message.nextElementSibling;
        }
    }, 

    messages: []
};

   

window.onload = labbyMezzage.init;