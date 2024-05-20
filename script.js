document.getElementById("playButton").addEventListener("click", generateSquares);

function generateSquares() {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Pulisce il contenitore

    for (let i = 1; i <= 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = i;
        square.addEventListener("click", function() {
            square.classList.toggle("active");
        });
        container.appendChild(square);
    }
}
