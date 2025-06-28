score = 0;
cross = true;
document.onkeydown = function(e) {
    console.log("Key is", e.key)
    if(e.key == " "){
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }
    if(e.key == "ArrowLeft"){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX - 100 + "px";
    }
    if(e.key == "ArrowRight"){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX + 100 + "px";
    }
}

setInterval(() => {
    let dino = document.querySelector(".dino");
    let gameOver = document.querySelector(".gameover");
    let obstacle = document.querySelector(".obstacleAni");

   

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));  
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    let offsetX = Math.abs(dx-ox);
    let offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY);

    if(offsetX < 50 && offsetY < 50) {
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("obstacleAni");
    }
    else if(offsetX < 145 && cross) {
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 500);
    }
}, 100);

function updateScore() {
    scoreCont.innerHTML = "Your score: " + score;
}