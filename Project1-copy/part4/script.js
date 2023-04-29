playbutton.addEventListener("click", function(){
    part1.style.animation = "blurText1 10s linear infinite alternate-reverse";
    part2.style.animation = "blurText2 10s linear infinite normal";
    part3.style.animation = "blurText3 10s linear infinite alternate";
})

pausebutton.addEventListener("click", function(){
    part1.style.animationPlayState = "paused";
    part2.style.animationPlayState = "paused";
    part3.style.animationPlayState = "paused";
})