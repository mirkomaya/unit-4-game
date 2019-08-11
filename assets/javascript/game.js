// $(document).ready(function() {}

var wins = 0;
var losses = 0;
var totalScore = 0;


var randomNumber = (Math.floor(Math.random() * 102) + 19);
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;



console.log(randomNumber);
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);


$("#randNum").text(randomNumber);
$("#winsText").text("Wins: " + wins);
$("#lossText").text("Losses: " + losses);
$("#scoreText").text(totalScore);


function reset() {
    totalScore = 0;
    $("#scoreText").text(totalScore);
    randomNumber = (Math.floor(Math.random() * 102) + 19);
    $("#randNum").text(randomNumber);
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
}


$("#gem1").on("click", function () {
    totalScore = totalScore + gem1;
    $("#scoreText").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsText").text("Wins: " + wins);
        reset();
    } else if (totalScore > randomNumber) {
        losses++;
        $("#lossText").text("Losses: " + losses);
        reset();
    }
});

$("#gem2").on("click", function () {
    totalScore = totalScore + gem2;
    $("#scoreText").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsText").text("Wins: " + wins);
        reset();
    } else if (totalScore > randomNumber) {
        losses++;
        $("#lossText").text("Losses: " + losses);
        reset();
    }
});

$("#gem3").on("click", function () {
    totalScore = totalScore + gem3;
    $("#scoreText").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsText").text("Wins: " + wins);
        reset();
    } else if (totalScore > randomNumber) {
        losses++;
        $("#lossText").text("Losses: " + losses);
        reset();
    }
});

$("#gem4").on("click", function () {
    totalScore = totalScore + gem4;
    $("#scoreText").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsText").text("Wins: " + wins);
        reset();
    } else if (totalScore > randomNumber) {
        losses++;
        $("#lossText").text("Losses: " + losses);
        reset();
    }
});


