function analyzeMood() {
    var sleep = parseFloat(document.getElementById("sleep").value);
    var exercise = parseFloat(document.getElementById("exercise").value);
    var nutrition = parseFloat(document.getElementById("nutrition").value);

    if (isNaN(sleep) || isNaN(exercise) || isNaN(nutrition)) {
        alert("Please enter valid numeric values for sleep, exercise, and nutrition.");
        return;
    }

    var mood = 2.8 + 0.2 * sleep + 0.175 * exercise + 0.00175 * nutrition;

    // Limit mood to a maximum value of 10
    mood = Math.min(mood, 10);

    document.getElementById("predictedMood").innerText = mood.toFixed(2);
    document.getElementById("result").style.display = "block";
}
