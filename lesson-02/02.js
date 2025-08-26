let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

let isWinningDouble = (dice1 === dice2) && (dice1 > 3);
