let chooseElement = null;

const move = function () {
    const elements = document.querySelectorAll(".containers");

    elements.forEach(container => {
        container.addEventListener("mousedown", (e) => {
            
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

closeButton.addEventListener("click", function(){
    mainpost.style.display = "none";
    comment1.style.display = "none";
    comment2.style.display = "none";
    comment3.style.display = "none";
    comment4.style.display = "none";
 })

shoesIcon.addEventListener("dblclick", function(){

    reddit1.style.animation = "show 0.1s linear 0.1s 1 forwards"
    shoesIcon.style.zIndex = "-1"
    mapPopup.style.animation = "show 0.1s linear 0.4s 1 forwards"
    article.style.animation = "show 0.1s linear 0.3s 1 forwards"
    reddit2.style.animation = "show 0.1s linear 0.2s 1 forwards";
    definition.style.animation = "show 0.1s linear 0.5s 1 forwards";
 })

reddit1.addEventListener("click", function(){

   comment1.style.animation = "show 0.1s linear 0.1s 1 forwards"
   comment2.style.animation = "show 0.1s linear 0.4s 1 forwards"
   comment3.style.animation = "show 0.1s linear 0.3s 1 forwards"
   comment4.style.animation = "show 0.1s linear 0.2s 1 forwards";
})


 reddit2.addEventListener("click", function(){
    comment5.style.animation = "show 0.1s linear 0.1s 1 forwards"
    comment6.style.animation = "show 0.1s linear 0.4s 1 forwards"
 })


 document.getElementById('vote2').addEventListener('click', function() {
    document.getElementById('voteImage').src = 'imgs/Screen Shot 2023-10-09 at 6.42.11 PM.png';
});

document.getElementById('vote1').addEventListener('click', function() {
    document.getElementById('voteImage').src = 'imgs/Screen Shot 2023-10-03 at 6.50.02 AM.png';
});

definition.addEventListener("click", function(){
    sneaker1.style.display = "block";
 })

hashtags.addEventListener("click", function(){
    video1.style.display = "block";
    video2.style.display = "block";
    kittyInfo.style.display = "block";
 })

anthroLink.addEventListener("click", function(){
    anthro.style.display = "block";
    psych.style.display = "block";
 })


fables.addEventListener("click", function(){
    fablesDes.style.display = "block";
    fairytalesDes.style.display = "none";
    litDes.style.display = "none";
 })

 fairytales.addEventListener("click", function(){
    fairytalesDes.style.display = "block";
    fablesDes.style.display = "none";
    litDes.style.display = "none";
 })

 modernLiterature.addEventListener("click", function(){
    litDes.style.display = "block";
    fairytalesDes.style.display = "none";
    fablesDes.style.display = "none";

 })

alice.addEventListener("click", function(){
    oldpaper.style.display = "block"; })

    pinocchio.addEventListener("click", function(){
        oldpaper1.style.display = "block";

    })

    junglebook.addEventListener("click", function(){
        jb.style.display = "block";

    })


 function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(50);
  }
  
  function draw() {
    fill('#E86670');
    noStroke();
    rect(mouseX, mouseY, 15);}
  
  function windowResized() {
    resizeCanvas(5230, windowHeight);

  }

//   const answerForm = document.getElementById("answerForm");
// const answerInput = document.getElementById("answerInput");
// const nameInput = document.getElementById("nameInput");
// const answerDisplay = document.getElementById("answerDisplay");
// const nameDisplay = document.getElementById("nameDisplay");

// // Event listener for form submission
// answerForm.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting and refreshing the page

//     const nameAnswer = nameInput.value;
//     const userAnswer = answerInput.value; // Get the user's answer from the input field

//     // Display the answer on the screen
//     nameDisplay.innerHTML = `${nameAnswer}'s Theory`;
//     answerDisplay.innerHTML = `${userAnswer}`;

//     // Clear the input field
//     answerInput.value = "";
//     nameInput.value = "";
// });

