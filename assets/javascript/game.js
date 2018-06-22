
var targetScore;
var score=0;
var wins=0;
var losses=0;
var crystals = [
    "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642",
    "https://www.sarahelizabethtodd.com/wp-content/uploads/2016/11/shutterstock_105784286.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41DsAQVpPAL.jpg",
    "http://media.beliefnet.com/~/media/photos/health/galleries/three-crystals-to-help-you-fight-depression/three_crystals_lepidolite.jpg"
    ]

function renderCrystals() {
    $("#crystal-container".empty);
    //generate target score once --not in the for loop below it
    targetScore=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("target score: " + targetScore);
            //append the random number to the row3Left div
            $("#slotforrandomscore").html("Here is your randomly assigned number: " + "<p>" + "<b>" + targetScore + "</b>");
    }

    //generate random number for each crystal
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
       
    //append the crystals 
        $("#crystal").append(
            "<img class='crystal' src=" + crystals[i] + " value=" + randomNumber  + ">");

}
// reset the score back to zero 
function reset() {
        score=0;
        //force this zeroed out score to display in the working count
        $("#row6").html(score);
        renderCrystals();
}

$(document).on("click", ".crystal", function() {
    var crystalValue = $(this).attr("value");
    // add the crystalValue amt clicked to the current ongoing score
    score += parseInt(crystalValue);
    console.log(score);
    //put the current working score into the id=#row6 div
    $("#row6").html(score);

    if (score === targetScore) {
        wins++;
        alert("You win!  " + "wins: " + wins + " losses: " + losses);
        $("#slotforwinslosses").html("Wins: " + wins + "<br>" + " Losses: " + losses);
        reset();
    }

    if (score > targetScore) {
        losses++;
        alert("You lose!  " + "wins: " + wins + "  losses: " + losses);
        $("#slotforwinslosses").html("Wins: " + wins + "<br>" + " Losses: " + losses);
        reset();
    }
})

//call the renderCrystals function above
renderCrystals()

