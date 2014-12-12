{"changed":true,"filter":false,"title":"Message.js","tooltip":"/2-labbymezzage/Message.js","value":"\"use strict\";\n/* Message constructor */\n\nfunction Message(message, date){\n    \n    this.getText = function(){\n        return message;\n    };\n    \n    this.setText = function(_text){\n        message = _text;\n    };\n    \n    this.getDate = function(){\n        return date;\n    };\n    \n    this.setDate = function(_date){\n        date = _date;\n    };\n}\n\nMessage.prototype.toString = function(){\n    // Returnerar objektet som en sträng\n    return (this.getText() + \" (\" + this.getDate() + \")\");\n};\n\nMessage.prototype.getHTMLText = function(){\n    // Hämtar texten med \\n utbytt mot <br/>\n    var text = this.getText().replace(/\\n/g, \"<br />\");\n    return text;\n};\n\nMessage.prototype.getDateText = function(){\n    \n    var d = this.getDate();\n    var h = addZeroToDate(d.getHours());\n    var m = addZeroToDate(d.getMinutes());\n    var s = addZeroToDate(d.getSeconds());\n    var dateText = h + \":\" + m + \":\" + s;\n    return dateText;\n};\n\nfunction addZeroToDate (i){\n    if (i < 10){\n        i = \"0\" + i;\n    }\n    return i;\n}","undoManager":{"mark":8,"position":9,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["\"use strict\";","console.log(\"Message loaded\");","","function Message (message, date) {","","\tthis.getText = function() {","","\t\treturn message;","\t};","","\tthis.setText = function(_text) {","","\t\tmessage = _text;","\t}","","\tthis.getDate = function() {","","\t\treturn date;","\t}","","\tthis.setDate = function(_date) {","","\t\tdate = _date;","\t}","","\tthis.getDateStringUTC = function() {","","\t\treturn date.getUTCFullYear() + \"-\" + date.getUTCMonth()+1 + \"-\" + date.getUTCDate() + \" \" + date.getUTCHours() + \":\" + date.getUTCMinutes() + \":\" + date.getUTCSeconds() + \"Z\";","\t}","","\tthis.getClockStringLocal = function() {","","\t\treturn date.getHours() + \":\" + date.getMinutes() + \":\" + date.getSeconds();","\t}","","","}","","Message.prototype.toString = function() {","","\treturn this.getText() + \" (\" + this.getDate() + \") \";","};","","","Message.prototype.getHTMLText = function() {","","\treturn this.getText() + \" (\" + this.getDate() + \") \";","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":2},"end":{"row":28,"column":3},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":47,"column":2},"action":"remove","lines":["\"use strict\";","console.log(\"Message loaded\");","","function Message (message, date) {","","\tthis.getText = function() {","","\t\treturn message;","\t};","","\tthis.setText = function(_text) {","","\t\tmessage = _text;","\t};","","\tthis.getDate = function() {","","\t\treturn date;","\t};","","\tthis.setDate = function(_date) {","","\t\tdate = _date;","\t};","","\tthis.getDateStringUTC = function() {","","\t\treturn date.getUTCFullYear() + \"-\" + date.getUTCMonth()+1 + \"-\" + date.getUTCDate() + \" \" + date.getUTCHours() + \":\" + date.getUTCMinutes() + \":\" + date.getUTCSeconds() + \"Z\";","\t};","","\tthis.getClockStringLocal = function() {","","\t\treturn date.getHours() + \":\" + date.getMinutes() + \":\" + date.getSeconds();","\t};","","","}","","Message.prototype.toString = function() {","","\treturn this.getText() + \" (\" + this.getDate() + \") \";","};","","","Message.prototype.getHTMLText = function() {","","\treturn this.getText() + \" (\" + this.getDate() + \") \";","};"]},{"start":{"row":0,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["/* Skapar en konstruktorfunktion */","function Message(message, date){","    //Skapar privata getters och setters (privilegierade metoder)","    //för meddelanden","    ","    //Hämtar meddelandetexten","    this.getText = function() {","        return message;","    }","    ","    //Sätter meddelandetexten","    this.setText = function(_text) {","        message = _text;","    }","    ","    //Skapar privata getters och setters (privilegierade metoder)","    //för datum","    ","    //Hämtar datum","    this.getMessDate = function() {","        return date;","    }","    ","    //Sätter datum","    this.setMessDate = function(_date) {","        date = _date;","    }","    ","    //Strängrepresentation av objektet","    Message.prototype.toString = function() {","        return this.getText() + \" (\" + this.getDate()+\")\";","    }","    ","    //Hämtar texten med \\n utbytt mot <br>","    Message.prototype.getHTMLText = function() {","        ","    }","    ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":38,"column":1},"action":"remove","lines":["/* Skapar en konstruktorfunktion */","function Message(message, date){","    //Skapar privata getters och setters (privilegierade metoder)","    //för meddelanden","    ","    //Hämtar meddelandetexten","    this.getText = function() {","        return message;","    }","    ","    //Sätter meddelandetexten","    this.setText = function(_text) {","        message = _text;","    }","    ","    //Skapar privata getters och setters (privilegierade metoder)","    //för datum","    ","    //Hämtar datum","    this.getMessDate = function() {","        return date;","    }","    ","    //Sätter datum","    this.setMessDate = function(_date) {","        date = _date;","    }","    ","    //Strängrepresentation av objektet","    Message.prototype.toString = function() {","        return this.getText() + \" (\" + this.getDate()+\")\";","    }","    ","    //Hämtar texten med \\n utbytt mot <br>","    Message.prototype.getHTMLText = function() {","        ","    }","    ","}"]},{"start":{"row":0,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["function Message(message, date) {","\tthis.getText = function() {","\t\treturn message;","\t};","","\tthis.setText = function(_text) {","\t\tmessage = _text;","\t};","","\tthis.getDate = function() {","\t\treturn date;","\t};","","\tthis.setDate = function(_date) {","\t\tdate = _date;","\t};","","\tMessage.prototype.toString = function() {","\t\treturn this.getText() + \" (\"+this.getDate()+\")\";","\t};","","\tMessage.prototype.getHTMLText = function() {","\t\treturn this.getText().replace(/[\\n\\r]/g, \"<br/>\");","\t};","","\tMessage.prototype.getDateText = function(alertDate) {","\t\tvar dateFormat = this.getDate();","","\t\tif (alertDate === true) {","\t\t\treturn \"Inlägget skapades den \" + dateFormat.getDate() + \" \" + dateFormat.getMonth() + \" \" + dateFormat.getFullYear() + \" klockan \" +","\t\t\t\t\tdateFormat.getHours() + \":\" + dateFormat.getMinutes() + \":\" + dateFormat.getSeconds();","\t\t}","","\t\telse {","\t\t\treturn dateFormat.getHours() + \":\" + dateFormat.getMinutes() + \":\" + dateFormat.getSeconds();","\t\t}","","\t};","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":38,"column":1},"action":"remove","lines":["function Message(message, date) {","\tthis.getText = function() {","\t\treturn message;","\t};","","\tthis.setText = function(_text) {","\t\tmessage = _text;","\t};","","\tthis.getDate = function() {","\t\treturn date;","\t};","","\tthis.setDate = function(_date) {","\t\tdate = _date;","\t};","","\tMessage.prototype.toString = function() {","\t\treturn this.getText() + \" (\"+this.getDate()+\")\";","\t};","","\tMessage.prototype.getHTMLText = function() {","\t\treturn this.getText().replace(/[\\n\\r]/g, \"<br/>\");","\t};","","\tMessage.prototype.getDateText = function(alertDate) {","\t\tvar dateFormat = this.getDate();","","\t\tif (alertDate === true) {","\t\t\treturn \"Inlägget skapades den \" + dateFormat.getDate() + \" \" + dateFormat.getMonth() + \" \" + dateFormat.getFullYear() + \" klockan \" +","\t\t\t\t\tdateFormat.getHours() + \":\" + dateFormat.getMinutes() + \":\" + dateFormat.getSeconds();","\t\t}","","\t\telse {","\t\t\treturn dateFormat.getHours() + \":\" + dateFormat.getMinutes() + \":\" + dateFormat.getSeconds();","\t\t}","","\t};","}"]},{"start":{"row":0,"column":0},"end":{"row":55,"column":1},"action":"insert","lines":["\"use strict\";","function Message(message, date){","    ","    this.getText = function(){","        return message;","    };","    ","    this.setText = function(_text){","        message = _text;","    };","    ","    this.getDate = function(){","        return date;","    };","    ","    this.setDate = function (_date){","        date = _date;","    };","}","","Message.prototype.toString = function(){","    var date, day, month, year;","    month = [\"januari\", \"februari\", \"mars\", \"april\", \"maj\", \"juni\",","    \"juli\", \"augusti\", \"september\", \"oktober\", \"november\", \"december\"];","    ","    date = this.getDate();","    day = date.getDate();","    month = month[date.getMonth()];","    year = date.getFullYear();","    ","    return \"Detta meddelande publicerades \" +day+ \" \" +month+ \" \" +year+","    \" klockan \" +this.getDateText();","};","","Message.prototype.getHTMLText = function(){","    return this.getText().replace(/[\\n\\r]/g, \"<br />\");","};","","Message.prototype.getDateText = function(){","    var date = this.getDate();","    var hours, minutes, seconds, time;","    ","    hours = Message.twoDigits(date.getHours());","    minutes = Message.twoDigits(date.getMinutes());","    seconds = Message.twoDigits(date.getSeconds());","    time = hours + \":\" + minutes + \":\" + seconds;","    ","    return time.toString();","};","","Message.twoDigits = function(digit){","    if(digit < 10){","        digit = \"0\" + digit;","    }","    return digit;","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":55,"column":1},"action":"remove","lines":["\"use strict\";","function Message(message, date){","    ","    this.getText = function(){","        return message;","    };","    ","    this.setText = function(_text){","        message = _text;","    };","    ","    this.getDate = function(){","        return date;","    };","    ","    this.setDate = function (_date){","        date = _date;","    };","}","","Message.prototype.toString = function(){","    var date, day, month, year;","    month = [\"januari\", \"februari\", \"mars\", \"april\", \"maj\", \"juni\",","    \"juli\", \"augusti\", \"september\", \"oktober\", \"november\", \"december\"];","    ","    date = this.getDate();","    day = date.getDate();","    month = month[date.getMonth()];","    year = date.getFullYear();","    ","    return \"Detta meddelande publicerades \" +day+ \" \" +month+ \" \" +year+","    \" klockan \" +this.getDateText();","};","","Message.prototype.getHTMLText = function(){","    return this.getText().replace(/[\\n\\r]/g, \"<br />\");","};","","Message.prototype.getDateText = function(){","    var date = this.getDate();","    var hours, minutes, seconds, time;","    ","    hours = Message.twoDigits(date.getHours());","    minutes = Message.twoDigits(date.getMinutes());","    seconds = Message.twoDigits(date.getSeconds());","    time = hours + \":\" + minutes + \":\" + seconds;","    ","    return time.toString();","};","","Message.twoDigits = function(digit){","    if(digit < 10){","        digit = \"0\" + digit;","    }","    return digit;","}"]},{"start":{"row":0,"column":0},"end":{"row":48,"column":1},"action":"insert","lines":["\"use strict\";","/* Message constructor */","","function Message(message, date){","    ","    this.getText = function(){","        return message;","    };","    ","    this.setText = function(_text){","        message = _text;","    };","    ","    this.getDate = function(){","        return date;","    };","    ","    this.setDate = function(_date){","        date = _date;","    };","}","","Message.prototype.toString = function(){","    // Returnerar objektet som en sträng","    return (this.getText() + \" (\" + this.getDate() + \")\");","};","","Message.prototype.getHTMLText = function(){","    // Hämtar texten med \\n utbytt mot <br/>","    var text = this.getText().replace(/\\n/g, \"<br />\");","    return text;","};","","Message.prototype.getDateText = function(){","    ","    var d = this.getDate();","    var h = addZeroToDate(d.getHours());","    var m = addZeroToDate(d.getMinutes());","    var s = addZeroToDate(d.getSeconds());","    var dateText = h + \":\" + m + \":\" + s;","    return dateText;","};","","function addZeroToDate (i){","    if (i < 10){","        i = \"0\" + i;","    }","    return i;","}"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":48,"column":1},"end":{"row":48,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418221235114}