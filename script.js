function analyzeMood() {

    var sleep = parseFloat(document.getElementById("sleep").value);
    var exercise = parseFloat(document.getElementById("exercise").value);
    var nutrition = parseFloat(document.getElementById("nutrition").value);


    if (isNaN(sleep) || isNaN(exercise) || isNaN(nutrition)) {
        alert("Please enter valid numeric values for sleep, exercise, and nutrition.");
        return;
    }

    var mood = 2.5 + 0.3 * sleep + 0.75 * exercise + 0.00175 * nutrition;

    document.getElementById("predictedMood").innerText = mood.toFixed(2);
    document.getElementById("result").style.display = "block";
}
