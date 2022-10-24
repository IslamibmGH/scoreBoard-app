function homeScoreOne() {
    let score =  document.getElementById("homeScore")
    score.textContent = parseInt(score.textContent || 0) + 1;
}

function homeScoreTwo() {
    let score =  document.getElementById("homeScore")
    score.textContent = parseInt(score.textContent || 0) + 2;
}

function homeScoreThree() {
    let score =  document.getElementById("homeScore")
    score.textContent = parseInt(score.textContent || 0) + 3;
}

function guestScoreOne() {
    let score =  document.getElementById("guestScore")
    score.textContent = parseInt(score.textContent || 0) + 1;
}

function guestScoreTwo() {
    let score =  document.getElementById("guestScore")
    score.textContent = parseInt(score.textContent || 0) + 2;
}

function guestScoreThree() {
    let score =  document.getElementById("guestScore")
    score.textContent = parseInt(score.textContent || 0) + 3;
}

function newGame() {
     let scoreGuest =  document.getElementById("guestScore")
    scoreGuest.textContent = 0;
    
    let scoreHome =  document.getElementById("homeScore")
    scoreHome.textContent = 0;
}
