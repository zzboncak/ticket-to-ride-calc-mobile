class Player {
    constructor(playerName, score = 0, longestRoute = false) {
        playerName: playerName
        score: score
        longestRoute: longestRoute
    }
}

const store = {
    currentPlayer: 0, // keep track of which player we're keeping score for
    players: []
}

export default store;

const storeTest = {
    players: [
        {
            name: "Zack",
            score: 123,
            longestRoute: false
        },
        {
            name: "Courtney",
            score: 123,
            longestRoute: true
        }
    ]
}