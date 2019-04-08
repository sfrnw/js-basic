var chessBoard = document.getElementById("chessBoard");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var x = 8;
var y = 8;
for (var i = 0; i < x; i++){
    var row = chessBoard.appendChild(document.createElement("div"));
    for (var j = 0; j < y; j++){
        var line = row.appendChild(document.createElement("div"));
        var textIsideBlock = x - j + alphabet[i];
        line.innerHTML = textIsideBlock;
    }
}