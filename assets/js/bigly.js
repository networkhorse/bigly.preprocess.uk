var input = document.getElementById("input");
var bigly = document.getElementById("bigly");

var LETTERS = "abcdefghijklmnopqrstuvwxyz";

function updateBigly() {
    var words = input.value.split(" ");
    var final_str = "";
    for (var wordIdx in words) {
        var word = words[wordIdx];
        for (var letterIdx in word) {
            var letter = word[letterIdx].toLowerCase();
            if (LETTERS.indexOf(letter) <= 0) continue;
            final_str += ":regional_indicator_" + letter + ": ";
        }
        final_str += "  ";
    }
    bigly.value = final_str;
}

input.addEventListener("keyup", updateBigly);