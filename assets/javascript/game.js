$(document).ready(function() {

    //Declaring global variables

    var wins = 0;
    var losses = 0;
    var score =0;
    var num1;
    var num2;
    var num3;
    var num4;
    var randomNum;

//Creating a function which runs at the start to generate random number to reach and individual random numbers for the crystals //
    function startGame(){
     randomNum = Math.floor((Math.random()* 102)+19);
     document.getElementById('randomNumber').innerHTML=randomNum;
     num1 = Math.floor((Math.random()* 12)+1);
     $('#rNum1').val(num1);
     num2 = Math.floor((Math.random()* 12)+1);
     $('#rNum2').val(num2);
     num3 = Math.floor((Math.random()* 12)+1);
     $('#rNum3').val(num3);
     num4 = Math.floor((Math.random()* 12)+1);
     $('#rNum4').val(num4);
     score = 0;
     //testing
     console.log(num1,num2,num3,num4);
     $("#wins").html("Wins: " + wins);
     $("#losses").html("Losses: " + losses);
}

startGame();
//Creating a function that registers the clicks on each crystal and adds the numbers generated//
$(".crystal").on("click", function() {
             var valueClicked = $(this).attr("value");
             //testing
             console.log(valueClicked);

             if (valueClicked === "crystal1") {
                score += num1;
            } else if (valueClicked === "crystal2") {
                score += num2;
            }
            else if (valueClicked === "crystal3") {
                score += num3;
            }
            else if (valueClicked === "crystal4") {
                score += num4;
            }
            $('#score').html(score);
            //testing
            console.log("score: "+score);

            winOrLoss();
});

//Creating the rules for wins and losses

function winOrLoss (){
if(score > randomNum){
    losses++;
    $('#resultMessage').html("You Lost!");
    startGame();
}

else if (score == randomNum){
    wins++;
    $('#resultMessage').html("You Win!");
    startGame();
}
};

});

