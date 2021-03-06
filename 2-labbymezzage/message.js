"use strict";
/* Message constructor */

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function(_date){
        date = _date;
    };
}

Message.prototype.toString = function(){
    // Returnerar objektet som en sträng
    return (this.getText() + " (" + this.getDate() + ")");
};

Message.prototype.getHTMLText = function(){
    // Hämtar texten med \n utbytt mot <br/>
    var text = this.getText().replace(/\n/g, "<br />");
    return text;
};

Message.prototype.getDateText = function(){
    
    var d = this.getDate();
    var h = addZeroToDate(d.getHours());
    var m = addZeroToDate(d.getMinutes());
    var s = addZeroToDate(d.getSeconds());
    var dateText = h + ":" + m + ":" + s;
    return dateText;
};

function addZeroToDate (i){
    if (i < 10){
        i = "0" + i;
    }
    return i;
}