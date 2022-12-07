let mode = {
    reward: 'talent',
    leaderboard: 'talent'
}
let roundNumber = {
    reward: 1,
    schedule: 1,
    leaderboard: 1
};

function setUserMode(cardName) {
    if (mode[cardName] == 'talent') {
        document.getElementById(`${cardName}-user`).src = './img/userSelect.png';
        document.getElementById(`${cardName}-talent`).src = './img/talentUnSelect.png';
        mode[cardName] = 'user'
    }
}
function setTalentMode(cardName) {
    if (mode[cardName] == 'user') {
        document.getElementById(`${cardName}-user`).src = './img/userUnSelect.png';
        document.getElementById(`${cardName}-talent`).src = './img/talentSelect.png';
        mode[cardName] = 'talent'
    }
}
function setRound1(cardName) {
    if (roundNumber[cardName] == 2) {
        document.getElementById(`${cardName}-round1`).src = './img/round1Select.png';
        document.getElementById(`${cardName}-round2`).src = './img/round2UnSelect.png';
        roundNumber[cardName] = 1;
    }
}
function setRound2(cardName) {
    if (roundNumber[cardName] == 1) {
        document.getElementById(`${cardName}-round1`).src = './img/round1UnSelect.png';
        document.getElementById(`${cardName}-round2`).src = './img/round2Select.png';
        roundNumber[cardName] = 2;
    }
}
