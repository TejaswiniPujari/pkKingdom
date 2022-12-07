const rewardsTalentRound1 = {
    0: `10 Days Celebration Audio Room theme + Fury \n Profile Frame`,
    1: `5 Days Celebration Audio Room theme + Fury \n Profile Frame`,
    2: `3 Days Celebration Audio Room theme`,
    3: `1 Day Celebration Audio Room theme`
}

const rewardsTalentRound2 = {
    0: `15 days PK STAR BADGE + Audio theme of \n PK combat + PK SUperStar \n Profile Frame`,
    1: `10 days Audio theme of PK combat + PK SUperStar \nProfile Frame`,
    2: `07 days Audio theme of PK combat`,
    3: `05 Day Celebration Audio Room theme`
}

const rewardsUser = {
    0: `User receives 25% of total beans pot`,
    1: `User receives 20% of total beans pot`,
    2: `User receives 15% of total beans pot`,
    3: `User receives 10% of total beans pot`,
    4: `User receives 5% of total beans pot`
}
const rewardsImgList = {
    0: './img/Rewards/Beans 1 Users-min.png',
    1: './img/Rewards/Beans 2 Users-min.png',
    2: './img/Rewards/Beans 3 Users-min.png',
    3: './img/Rewards/Beans 4 Users-min.png',
    4: './img/Rewards/Beans 5-10 Users-min.png',

}

let mode = {
    reward: 'talent',
    leaderboard: 'talent'
}

let roundNumber = {
    reward: 1,
    schedule: 1,
    leaderboard: 1
};

let slideNumber = 0;
const dots = document.getElementsByClassName('dot');
const lastdot = document.getElementById('last-dot');
lastdot.remove();

function onLeftShift() {
    if (slideNumber > 0) {
        dots[slideNumber - 1].classList.add("active");
        dots[slideNumber].classList.remove('active');
        slideNumber = slideNumber - 1;
        document.getElementById('user-rewards-img').src = rewardsImgList[slideNumber];
        if (mode.reward == 'user')
            document.getElementById('reward-info').innerHTML = rewardsUser[slideNumber];
        else {
            if (roundNumber.reward == 1)
                document.getElementById('reward-info').innerHTML = rewardsTalentRound1[slideNumber];
            if (roundNumber.reward == 2)
                document.getElementById('reward-info').innerHTML = rewardsTalentRound2[slideNumber];
        }
    }
}
function onRightShift() {
    if (slideNumber < dots.length) {
        dots[slideNumber + 1].classList.add("active");
        dots[slideNumber].classList.remove('active');
        slideNumber = slideNumber + 1;
        document.getElementById('user-rewards-img').src = rewardsImgList[slideNumber];
        if (mode.reward == 'user')
            document.getElementById('reward-info').innerHTML = rewardsUser[slideNumber];
        else {
            if (roundNumber.reward == 1)
                document.getElementById('reward-info').innerHTML = rewardsTalentRound1[slideNumber];
            if (roundNumber.reward == 2)
                document.getElementById('reward-info').innerHTML = rewardsTalentRound2[slideNumber];
        }
    }
}



function setUserMode(cardName) {
    if (mode[cardName] == 'talent') {
        document.getElementById(`${cardName}-user`).src = './img/userSelect.png';
        document.getElementById(`${cardName}-talent`).src = './img/talentUnSelect.png';
        mode[cardName] = 'user';
        document.getElementById('reward-collection-for-user').style.display = 'block';
        document.getElementById('reward-collection-for-talent').style.display = 'none';
        document.getElementById('carousel-dot').appendChild(lastdot);
        dots[slideNumber].classList.remove('active');
        dots[0].classList.add("active");
        slideNumber = 0;
        document.getElementById('reward-info').innerHTML = rewardsUser[slideNumber];
    }
}
function setTalentMode(cardName) {
    if (mode[cardName] == 'user') {
        document.getElementById(`${cardName}-user`).src = './img/userUnSelect.png';
        document.getElementById(`${cardName}-talent`).src = './img/talentSelect.png';
        mode[cardName] = 'talent'
        document.getElementById('reward-collection-for-user').style.display = 'none';
        document.getElementById('reward-collection-for-talent').style.display = 'block';
        lastdot.remove();
        dots[slideNumber].classList.remove('active');
        dots[0].classList.add("active");
        slideNumber = 0;
        if (roundNumber.reward == 1)
            document.getElementById('reward-info').innerHTML = rewardsTalentRound1[slideNumber];
        if (roundNumber.reward == 2)
            document.getElementById('reward-info').innerHTML = rewardsTalentRound2[slideNumber];
    }
}
function setRound1(cardName) {
    if (roundNumber[cardName] == 2) {
        document.getElementById(`${cardName}-round1`).src = './img/round1Select.png';
        document.getElementById(`${cardName}-round2`).src = './img/round2UnSelect.png';
        roundNumber[cardName] = 1;
        dots[slideNumber].classList.remove('active');
        dots[0].classList.add("active");
        slideNumber = 0;
        if (mode.reward == 'user')
            document.getElementById('reward-info').innerHTML = rewardsUser[slideNumber]
        else
            document.getElementById('reward-info').innerHTML = rewardsTalentRound1[slideNumber]
    }

}
function setRound2(cardName) {
    if (roundNumber[cardName] == 1) {
        document.getElementById(`${cardName}-round1`).src = './img/round1UnSelect.png';
        document.getElementById(`${cardName}-round2`).src = './img/round2Select.png';
        roundNumber[cardName] = 2;
        dots[slideNumber].classList.remove('active');
        dots[0].classList.add("active");
        slideNumber = 0;
        if (mode.reward == 'user')
            document.getElementById('reward-info').innerHTML = rewardsUser[slideNumber]
        else
            document.getElementById('reward-info').innerHTML = rewardsTalentRound2[slideNumber]
    }
}
