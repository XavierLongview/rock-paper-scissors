// Get computer choice: 
// 1. Get a randome number from 1-3
let getComputerChoice = () => {
    num = Math.trunc(Math.random() * 3);
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else if (num === 2) {
        return 'Scissors';
    }
}

