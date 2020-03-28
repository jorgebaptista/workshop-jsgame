function solveProblem(name1, computer, select1, computerSelect) {
    let winner, winnerSelection, loserSelection;

    function assignSelections(w, ws, ls) {
        winner = w
        winnerSelection = ws
        loserSelection = ls
    }

    if (select1 === computerSelect) {
        assignSelections("none", "nothing", "nothing")

        return (result = { winner, winnerSelection, loserSelection })
    }

    switch (select1) {
        case "scissors":
            if (computerSelect === "paper" || computerSelect === "lizard") assignSelections(name1, select1, computerSelect)
            else assignSelections(computer, computerSelect, select1)
            break;
        case "paper":
            if (computerSelect === "rock" || computerSelect === "spock") assignSelections(name1, select1, computerSelect)
            else assignSelections(computer, computerSelect, select1)
            break;
        case "rock":
            if (computerSelect === "lizard" || computerSelect === "scissors") assignSelections(name1, select1, computerSelect)
            else assignSelections(computer, computerSelect, select1)
            break;
        case "lizard":
            if (computerSelect === "spock" || computerSelect === "paper") assignSelections(name1, select1, computerSelect)
            else assignSelections(computer, computerSelect, select1)
            break;
        case "spock":
            if (computerSelect === "scissors" || computerSelect === "rock") assignSelections(name1, select1, computerSelect)
            else assignSelections(computer, computerSelect, select1)
            break;
        default:
            alert("Something is wrong!")
            break;
    }

    // these should be the result variables
    // winner = Here goes the winning player
    // winningSelection = Here goes the selection of the winner
    // loserSelection = Here goes the selection of the loser

    return (result = { winner, winnerSelection, loserSelection })
}