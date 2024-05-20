document.getElementById("playButton").addEventListener("click", generateSquares);







//# Sezione Funzioni ----------------------------------------------------------------------------------------

//? Per generare le celle dentro il nostro container (campo di gioco)
function generateSquares() {
    const container = document.getElementById("container");
    container.innerHTML = ""; // svuota il container

    const bombPositions = generateBombs();
    console.log("Posizione delle Bombe:", bombPositions); // ci dice quali sono le posizioni delle bombe, in console

    for (let i = 1; i <= 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = i;

        square.addEventListener("click", function() {
            if (bombPositions.includes(i)) {
                square.classList.add("bomb");
            } else {
                square.classList.add("safe");
            }
        });
        container.appendChild(square);
    }
}







//? Per generare le 16 Bombe
function generateBombs() {
    const bombPositions = new Set();
    while (bombPositions.size < 16) {
        const bombPosition = Math.floor(Math.random() * 100) + 1;
        bombPositions.add(bombPosition);
    }
    return Array.from(bombPositions);
}
