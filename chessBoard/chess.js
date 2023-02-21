var chess = document.getElementById("chess");
for( i = 0; i < 8; i++) {
    for( j = 0; j < 8; j++){
        var square = document.createElement("div");
        square.className = "square";
        if( (i + j) % 2 == 0){
            square.style.backgroundColor = "white";
        }
        else{
            square.style.backgroundColor = "black"
        }
        chess.appendChild(square);
    }
}