// to create a random button press use the random module
//we have to use some array to store the seq
//to change heading,we have to  use some variable count
var colors=["red","blue","green","yellow"];
var pattern=[];
var userChosenpattern=[];
var level=0;
var started=false;


$(document).on("keydown",function(){
    if(!started){
        nextSequence();
        started=true;

    }
    });


    $(".btn").click(function(){
        var userChosenColour=$(this).attr("id");
        userChosenpattern.push(userChosenColour);
        console.log(userChosenpattern);
        playsound(userChosenColour);
        pressaniamte(userChosenColour);
        checkans(userChosenpattern.length-1);
        
            
        });
   
function nextSequence(){
    userChosenpattern  = [];
    level++;
    $("h1").text("Level "+level);
    var random_no=Math.floor(Math.random()*4);
    var rand_color=colors[random_no];
    pattern.push(rand_color);
    console.log(pattern);
    $("#"+rand_color).fadeIn(250).fadeOut(250).fadeIn(250);
    playsound(rand_color);
    
  
    

}

    

    

function checkans(idx){
    
        if (pattern[idx] === userChosenpattern[idx]){
            if(pattern.length===userChosenpattern.length){
                
            setTimeout(function(){
                nextSequence();
            },1000);}

           
            }
           
                
                
                
            
            
    
    
    else{
        $("h1").text("Game over!!Press any key to start over");
        var beep=new Audio("./wrong.mp3");
        beep.play();
       
        $("body").addClass("game-over");
        setTimeout(function()  {
            $("body").removeClass("game-over");
    
            
        }, 200);
        startover();



    }
}    




function playsound(name){
var audio=new Audio("./sounds/"+name+".mp3");
audio.play();
}


function pressaniamte(currentcolor){
    $("#"+currentcolor).addClass("pressed");
        setTimeout(function()  {
        $("#"+currentcolor).removeClass("pressed");

        
    }, 100);
}
function startover(){
    
    level=0;
   
    pattern=[];
    started=false;
}
 
$(document).on("keydown",function(){
    if(!started){
        nextSequence();
        started=true;

    }
    });
   




