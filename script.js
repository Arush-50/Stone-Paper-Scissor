function mainFunction() {
    const stone = document.getElementById("stone")
    const paper = document.getElementById("paper")
    const scissor = document.getElementById("scissor")
    let gamesPlayed = document.getElementById("played")
    let win = document.getElementById("win")
    let lose = document.getElementById("lose")
    let draw = document.getElementById("draw")
    let gamesCount = 1
    let winCount = 1
    let loseCount = 1
    let drawCount = 1

    stone.onclick = function () {
        let options = ["Stone", "Paper", "Scissor"];
        let random = Math.floor(Math.random() * (3));
        let com = (options[random]);
        document.getElementById("player-chose").textContent = "Stone";
        document.getElementById("computer-chose").textContent = com;
        if (com == "Stone") {
            document.getElementById("result").textContent = "Draw"
            draw.textContent = drawCount++
        }
        else if (com == "Paper") {
            document.getElementById("result").textContent = "Computer won";
            lose.textContent = loseCount++
        }
        else if (com == "Scissor") {
            document.getElementById("result").textContent = "You won";
            win.textContent = winCount++
        }
        gamesPlayed.textContent = gamesCount++
    }

    paper.onclick = function () {
        let options = ["Stone", "Paper", "Scissor"];
        let random = Math.floor(Math.random() * (3));
        let com = (options[random]);
        document.getElementById("player-chose").textContent = "Paper";
        document.getElementById("computer-chose").textContent = com;
        if (com == "Stone") {
            document.getElementById("result").textContent = "You won";
            win.textContent = winCount++
        }
        else if (com == "Paper") {
            document.getElementById("result").textContent = "Draw";
            draw.textContent = drawCount++
        }
        else if (com == "Scissor") {
            document.getElementById("result").textContent = "Computer won";
            lose.textContent = loseCount++
        }
        gamesPlayed.textContent = gamesCount++
    }

    scissor.onclick = function () {
        let options = ["Stone", "Paper", "Scissor"];
        let random = Math.floor(Math.random() * (3));
        let com = (options[random]);
        document.getElementById("player-chose").textContent = "Scissor";
        document.getElementById("computer-chose").textContent = com;
        if (com == "Stone") {
            document.getElementById("result").textContent = "Computer won";
            lose.textContent = loseCount++
        }
        else if (com == "Paper") {
            document.getElementById("result").textContent = "You won";
            win.textContent = winCount++
        }
        else if (com == "Scissor") {
            document.getElementById("result").textContent = "Draw";
            draw.textContent = drawCount++
        }
        gamesPlayed.textContent = gamesCount++
    }
}
mainFunction()