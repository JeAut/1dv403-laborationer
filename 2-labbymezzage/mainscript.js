"use strict";

var labbymezzage = {
    
    messages: [],
    
    init: function(e){ 
        
        var button = document.querySelector("#button");
        var textarea = document.getElementById("textbox");
        document.getElementById("counter").innerHTML = "Antal meddelanden: 0";

        button.onclick = function(){
            labbymezzage.createMessage(textarea);
        };
        
        textarea.onkeypress = function(e){
            if(e.keyCode == 13 && !e.shiftKey){
                    e.preventDefault();
                    labbymezzage.createMessage(textarea);
            }
        };

    },
    
    createMessage: function(textarea){
        var message = textarea.value;
        
        if(message === ""){
            alert ("Du måste skriva in minst ett tecken.");
        }
        
        else if(message !== ""){
            
            var mess = new Message(message, new Date());
            labbymezzage.messages.push(mess);

            labbymezzage.renderMessages(labbymezzage.messages[labbymezzage.messages.length-1]);
        }
    },
    
    
    renderMessages: function(){

        document.getElementById("messages").innerHTML = "";
        var textbox = document.querySelector("#textbox");
        
         
        
        for (var i = 0; i < labbymezzage.messages.length; ++i){
            labbymezzage.renderMessage(i);
            textbox.value = "";
        }
            labbymezzage.countMessages(i);
        
    },
    
    countMessages: function(count){

        var counter = count-1;
        counter++;

        var counterText;
        counterText = document.getElementById("counter").innerHTML = "Antal meddelanden: " + counter;

    },
    
    
    renderMessage: function(messageID){
        
        var myMessages = document.getElementById("messages");
        
        var oneMessage = document.createElement("div");
        oneMessage.className = "message";
        
        var text = document.createElement("p");
        text.className = "messagetext";
        text.innerHTML = labbymezzage.messages[messageID].getHTMLText();
        
        var date = document.createElement("footer");
        date.className = "datetext";
        date.innerHTML = labbymezzage.messages[messageID].getDateText();

        var icons = document.createElement("div");
        icons.className = "icons";
        
        var removeMessage = document.createElement("img");
        removeMessage.className = "removemessage";
        removeMessage.setAttribute("src", "delete.png");
        removeMessage.setAttribute("alt", "Radera meddelandet");
        
        var aRemoveMessage = document.createElement("a");
        aRemoveMessage.setAttribute("href", "#");

        aRemoveMessage.appendChild(removeMessage);
        
        var messageTime = document.createElement("img");
        messageTime.className = "messagetime";
        messageTime.setAttribute("src", "clock.png");
        messageTime.setAttribute("alt", "När skapades meddelandet?");
        
        var aMessageTime = document.createElement("a");
        aMessageTime.setAttribute("href", "#");

        aMessageTime.appendChild(messageTime);
        
        icons.appendChild(aMessageTime);
        icons.appendChild(aRemoveMessage);

        oneMessage.appendChild(text);
        oneMessage.appendChild(icons);
        oneMessage.appendChild(date);
        
        myMessages.appendChild(oneMessage);
        
        aRemoveMessage.onclick = function(){
            labbymezzage.removeActualMessage(messageID);
        };
        
        aMessageTime.onclick = function(){
            labbymezzage.messageTimeCreated(messageID);
        };
    },
    
    messageTimeCreated: function(time){
            var months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
            var monthNumber = labbymezzage.messages[time].getDate().getMonth();
            var month = months[monthNumber];
            var d = labbymezzage.messages[time].getDate();
            alert("Inlägget skapades den " + d.getDate() + " " + month + " " + d.getFullYear() + " klockan " + labbymezzage.messages[time].getDateText());
    },
    
    removeActualMessage: function(removedMessage){
            var control = confirm("Är du säker på att du vill ta bort meddelandet?");
            if(control === true){
            labbymezzage.messages.splice(removedMessage, 1);
            labbymezzage.renderMessages();
        }
    },

};

window.onload = labbymezzage.init;