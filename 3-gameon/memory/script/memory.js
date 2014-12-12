"use strict";

window.onload = function() {
    
    var startGame = document.getElementById("start");
    var rows = 4;
    var columner = 4;
    var myObject = {};
    var box = document.getElementById("gameBox");
    var counter = document.getElementById("counter");
    var counterWindow = document.getElementById("counterWindow");
    var gameArea = document.getElementById("theGame");
    var restart = document.getElementById("restart");
    var pairs = document.getElementById("pairs");
    var count = 0;
    var element = 0;
    var flip = 0;
    var last = null;
    var pair = 0;
    var preventCheating = true;
    var victoryScore = 8;
    
    
    startGame.addEventListener("click", function(e) {
       e.preventDefault();
       myObject = new RandomGenerator.getPictureArray(rows, columner);
       startGame.innerHTML ="";
       createGame();
        
    });
    
    restart.addEventListener("click", function(e) {
        e.preventDefault();
        location.reload();
    });
    
    var createGame = function() {
        
        gameArea.innerHTML ="";
        
        for (var i = 0; i < rows; i++){
            var table = document.createElement("table");
            var tr = document.createElement("tr");
            
            table.appendChild(tr);
            
            for (var c = 0; c < columner; c++){
                var td = document.createElement("td");
                var showImg = document.createElement("img");
                var aTag = document.createElement("a");
                
                aTag.href = "#";
                showImg.src = "../pics/0.png";
                showImg.className = "../pics/" + myObject[element] + ".png";
                aTag.img = showImg;
                
                element++;
                aTag.addEventListener("click", guess);
                
                aTag.appendChild(showImg);
                td.appendChild(aTag);
                tr.appendChild(td);
            }
            
            gameArea.appendChild(table);
            box.appendChild(gameArea);
        }
    };
    
    var guess = function(e){
        
        e.preventDefault();
        
        if (preventCheating === true)
        {
            this.img.src = this.img.className;
            
            ++flip;
            
            if (flip === 1)
            {
                last = this;
                last.removeEventListener("click", guess);
            }
            
            if (flip === 2)
            {
                preventCheating = false;
                var current = this;
                last.addEventListener("click", guess);
                flip = 0;
                addGuess();
                
                
                if (current.img.className === last.img.className)
                {
                    console.log("ett par");
                    current.removeEventListener("click", guess);
                    last.removeEventListener("click", guess);
                    pair++;
                    pairs.innerHTML = "Par: "+pair+"/8";
                    preventCheating = true;
                    
                    if (pair === victoryScore)
                    {
                        alert("Grattis! Du har vunnit.")
                    }
                }
                
                else
                {
                    setTimeout(function()
                    {
                        console.log(current);
                        console.log(last);
                        current.img.src = "../pics/0.png";
                        last.img.src = "../pics/0.png";
                        preventCheating = true;
                    }, 500);
                }
            }
            
            
        }
    }
    
    var addGuess = function(){
        count++;
        counter.innerHTML = "Guesses : " + count;
        counterWindow.appendChild(counter);
    }
};