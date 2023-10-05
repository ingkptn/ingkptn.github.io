// playbutton.addEventListener("click", function(){
//     part1.style.animation = "blurText1 10s linear infinite alternate-reverse";
//     part2.style.animation = "blurText2 10s linear infinite normal";
//     part3.style.animation = "blurText3 10s linear infinite alternate";
// })

// pausebutton.addEventListener("click", function(){
//     part1.style.animationPlayState = "paused";
//     part2.style.animationPlayState = "paused";
//     part3.style.animationPlayState = "paused";
// })

scanButton.addEventListener("click", function(){
    sneakers.style.filter = "brightness(0.9)";
    sneakers.style.filter = "contrast(1.3)";
    scanButton.style.opacity="0";
    scanBox.style.opacity ="0.6";
    loadingBar.style.animation = "startLoading 3s linear 1";
    loadingBox.style.animation = "hideBox 3s linear 1";
    results.style.animation = "showResults 3s linear 1 forwards";
})




// const move = function() {
//     const elements = document.querySelectorAll(".containers");

//     elements.forEach(container => {
//         container.addEventListener("mousedown", (e) => {
            

//             chooseElement = container;

//             const offsetX = e.clientX - chooseElement.getBoundingClientRect().left;
//             const offsetY = e.clientY - chooseElement.getBoundingClientRect().top;

//             document.onmousemove = (e) => {
//                 if (chooseElement) {
//                     const x = e.clientX - offsetX;
//                     const y = e.clientY - offsetY;

//                     chooseElement.style.left = x + "px";
//                     chooseElement.style.top = y + "px";
//                 }
//             };

//             document.onmouseup = () => {
//                 chooseElement = null;
//             };
//         });
//     });
// };

// move();

let chooseElement = null;

const move = function () {
    const elements = document.querySelectorAll(".containers");

    elements.forEach(container => {
        container.addEventListener("mousedown", (e) => {
            e.preventDefault();
            chooseElement = container;

            const offsetX = e.clientX - chooseElement.getBoundingClientRect().left;
            const offsetY = e.clientY - chooseElement.getBoundingClientRect().top;

            document.onmousemove = (e) => {
                if (chooseElement) {
                    const x = e.clientX - offsetX;
                    const y = e.clientY - offsetY;

                    chooseElement.style.left = x + "px";
                    chooseElement.style.top = y + "px";
                }
            };
        });
    });

    document.onmouseup = () => {
        chooseElement = null;
    };
};

move();

