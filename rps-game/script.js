const $playButton = document.getElementById("play")
const emojis = {
    rock: "🗿 Rock",
    paper: "📃 Paper",
    scissors: "✂️ Scissors",
    lizard: "🦎 Lizard",
    spock: "🖖 Spock"
}

const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"]

$playButton.addEventListener("click", () => {
    const $player1name = document.getElementById("first-player").value
    const $player2name = document.getElementById("second-player").value
    const $player1select = document.getElementById("first-player-move").value
    const $player2select = document.getElementById("second-player-move").value
    const $compSelect = document.getElementById("second-player-move")
    const $result = document.getElementById("result")

    $compSelect.value = "computer"

    if (!$player1name) {
        alert("Hey! You not playing?!")
        return
    }

    const compRand = Math.floor(Math.random() * computerOptions.length)

    const computerPick = computerOptions[compRand]



    // const result = solveProblem($player1name,$player2name,$player1select,$player2select);

    const result = solveProblem($player1name, "computer", $player1select, computerPick);
    let resultText

    result.winner !== "none" ? resultText = `Winner is ${result.winner} 🥇🍾 by doing [${emojis[result.winnerSelection]}] over [${emojis[result.looserSelection]}]` : resultText = "It was a tie! 🤷‍♂️🤷‍♀️"


    $result.innerText = "🥁🥁🥁🥁🥁🥁"
    setTimeout(() => {
        $result.innerText = resultText
        $compSelect.value = computerPick
    }, 1500)

})