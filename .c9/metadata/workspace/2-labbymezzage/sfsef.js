{"filter":false,"title":"sfsef.js","tooltip":"/2-labbymezzage/sfsef.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":138,"column":34},"action":"remove","lines":["\"use strict\";","console.log(\"labbyMezzage loaded\");","","var labbyMezzage = {","","    init: function () ","    {","        var buttonPost = document.getElementById(\"button\");","        buttonPost.onclick = labbyMezzage.postMessage;","        ","        var entersend = document.getElementById(\"messageInput\");","        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey && document.getElementById(\"messageInput\").value !== \"\"){","                e.preventDefault();","                labbyMezzage.postMessage();","                }","                if (e.keyCode == 13 && document.getElementById(\"messageInput\").value === \"\")","                {e.preventDefault()}","                ","        };","        ","        ","    },","","    postMessage: function ()","    {","        createMessageObjekt();","        renderLatestMessage();","","        function createMessageObjekt()","        {","            ","            var textarea = document.getElementById(\"messageInput\");","            labbyMezzage.messages.push( new Message( textarea.value, new Date()));","","        }","        ","    ","        function renderLatestMessage()","        {","            ","\t\tvar post = document.createElement(\"div\");","\t\t","\t\tvar postFunction = document.createElement(\"div\");","\t\tvar imgClose = document.createElement(\"img\");","\t\tvar aDelete = document.createElement(\"a\");","\t\tvar imgTime = document.createElement(\"img\");","\t\tvar aTime = document.createElement(\"a\");","\t\tvar pText = document.createElement(\"p\");","\t\tvar dateDiv = document.createElement(\"div\");","\t\tvar pDate = document.createElement(\"p\");","\t\t","\t\t","\t\tpost.setAttribute(\"class\", \"post\");","\t\tpostFunction.setAttribute(\"class\", \"postFunction\");","\t\timgClose.setAttribute(\"src\", \"delete.png\");","\t\timgClose.setAttribute(\"alt\", \"Red round button with a cross on it.\");","\t\timgTime.setAttribute(\"src\", \"clock.png\");","\t\timgTime.setAttribute(\"alt\", \"a klock\");","\t\taDelete.setAttribute(\"href\", \"#\");","\t\taTime.setAttribute(\"href\", \"#\");","\t\tdateDiv.setAttribute(\"class\", \"theTime\");","\t\t","\t\t","\t\t","            var lastMessageId = labbyMezzage.messages.length - 1;","","            var messageBoard = document.getElementById(\"messageBoard\");","","            var message = document.createElement(\"article\");","            message.setAttribute(\"class\", \"message\");","            var time = document.createElement(\"time\");","            var p = document.createElement(\"p\");","","            // Skapa ta-bort knapp på meddelandet","            var buttonRemove = document.createElement(\"a\");","            buttonRemove.setAttribute(\"href\", \"#\");","            buttonRemove.innerHTML = '<img src=\"delete.png\" width=\"24px\" height=\"24px\" />';","            buttonRemove.addEventListener(\"click\", labbyMezzage.removeMessage, false);","            message.appendChild(buttonRemove);","","        ","","\t\taTime.onclick = function(e){","\t\t\te.preventDefault();","\t\t\tlabbyMezzage.showTime(lastMessageId);","\t\t\talert(labbyMezzage.messages[lastMessageId].toString());","\t\t},","","            ","            time.setAttribute(\"datetime\", labbyMezzage.messages[lastMessageId].getDateStringUTC());","","            time.innerHTML = labbyMezzage.messages[lastMessageId].getClockStringLocal();","            p.innerHTML = labbyMezzage.messages[lastMessageId].getText();","","            //Time and date image","\t\t    postFunction.appendChild(aTime);","\t     \taTime.appendChild(imgTime);","            message.appendChild(time);","            message.appendChild(p);","            messageBoard.appendChild(message);","        }","    },","","    removeMessage: function(lastMessageId)","    {","       var messageBoard = document.getElementById(\"messageBoard\");","        var messageClicked = this.parentNode;","\t\t\tvar result = confirm(\"Är du säker på att du vill radera detta meddelande\");","            if (result===true) {","                 var messageNumber = labbyMezzage.getMessageNumber(messageClicked);","                  messageBoard.removeChild(messageBoard.childNodes[messageNumber]);","            }","    },","    ","   ","","    getMessageNumber: function(messageClicked)","    {","        var message = document.querySelector(\".message\");","        var count = 0;","","        while (message)","        {","            if (message == messageClicked)","            {","                return count;","            }","","            count++;","            message = message.nextElementSibling;","        }","    }, ","","    messages: []","};","","   ","","window.onload = labbyMezzage.init;"]},{"start":{"row":0,"column":0},"end":{"row":138,"column":34},"action":"insert","lines":["\"use strict\";","console.log(\"labbyMezzage loaded\");","","var labbyMezzage = {","","    init: function () ","    {","        var buttonPost = document.getElementById(\"button\");","        ","        ","        var entersend = document.getElementById(\"messageInput\");","        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey && document.getElementById(\"messageInput\").value !== \"\"){","                e.preventDefault();","                labbyMezzage.postMessage();","                }","                if (e.keyCode == 13 && document.getElementById(\"messageInput\").value === \"\")","                {e.preventDefault()}","                ","        };","        buttonPost.onclick = labbyMezzage.postMessage;","    },","","    postMessage: function ()","    {","        createMessageObjekt();","        renderLatestMessage();","","        function createMessageObjekt()","        {","            ","            var textarea = document.getElementById(\"messageInput\");","            labbyMezzage.messages.push( new Message( textarea.value, new Date()));","","        }","        ","    ","        function renderLatestMessage()","        {","            ","\t\tvar post = document.createElement(\"div\");","\t\t","\t\tvar postFunction = document.createElement(\"div\");","\t","\t\tvar imgTime = document.createElement(\"a\");","\t\tvar aTime = document.createElement(\"a\");","\t","\t","\t\t","\t\t","\t\tpost.setAttribute(\"class\", \"post\");","\t\tpostFunction.setAttribute(\"class\", \"postFunction\");","\t","\t","\t\timgTime.setAttribute(\"src\", \"pics/clock.png\");","\t\timgTime.setAttribute(\"alt\", \"a klock\");","\t","\t\taTime.setAttribute(\"href\", \"#\");","\t","\t\t","\t\t","\t\t","            var lastMessageId = labbyMezzage.messages.length - 1;","","            var messageBoard = document.getElementById(\"messageBoard\");","","            var message = document.createElement(\"article\");","            message.setAttribute(\"class\", \"message\");","            var time = document.createElement(\"time\");","            var p = document.createElement(\"p\");","","            // Skapa ta-bort knapp på meddelandet","            var buttonRemove = document.createElement(\"a\");","            buttonRemove.setAttribute(\"href\", \"#\");","            buttonRemove.innerHTML = '<img src=\"delete.png\" width=\"24px\" height=\"24px\" />';","            buttonRemove.addEventListener(\"click\", labbyMezzage.removeMessage, false);","            message.appendChild(buttonRemove);","","        ","//Time and date image","\t\t   ","\t     \taTime.appendChild(imgTime);","            message.appendChild(time);","            ","\t\taTime.onclick = function(e){","\t\t   var imgTime = document.createElement(\"a\");","\t\t   imgTime.setAttribute(\"src\", \"clock.png\");","\t\t\te.preventDefault();","\t\t\tlabbyMezzage.showTime(lastMessageId);","\t\t\talert(labbyMezzage.messages[lastMessageId].toString());","\t\t},","","            ","            time.setAttribute(\"datetime\", labbyMezzage.messages[lastMessageId].getDateStringUTC());","","            time.innerHTML = labbyMezzage.messages[lastMessageId].getClockStringLocal();","            p.innerHTML = labbyMezzage.messages[lastMessageId].getText();","","            ","            message.appendChild(p);","            messageBoard.appendChild(message);","        }","    },","","    removeMessage: function(lastMessageId)","    {","        var messageBoard = document.getElementById(\"messageBoard\");","        var messageClicked = this.parentNode;","\t\tvar result = confirm(\"Är du säker på att du vill radera detta meddelande\");","        if (result===true) {","        var messageNumber = labbyMezzage.getMessageNumber(messageClicked);","        messageBoard.removeChild(messageBoard.childNodes[messageNumber]);","            }","    },","    ","   ","","    getMessageNumber: function(messageClicked)","    {","        var message = document.querySelector(\".message\");","        var count = 0;","","        while (message)","        {","            if (message == messageClicked)","            {","                return count;","            }","","            count++;","            message = message.nextElementSibling;","        }","    }, ","","    messages: []","};","","   ","","window.onload = labbyMezzage.init;"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":28},"end":{"row":22,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418220144662,"hash":"38ed279ee958a21898e18a689c22ca09b514dc79"}