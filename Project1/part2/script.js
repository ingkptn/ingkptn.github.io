

dot16.addEventListener("click", function(){
    dot16.style.animationPlayState = "paused";
    dot16.style.width = '2500px';
    dot16.style.height = '2000px';
    dot16.style.zIndex = '20';
    page2.style.color='#F8F5F0';
    page2.style.zIndex='30';
    page2.style.opacity='1';


    let light = document.getElementById('light');
const onMouseMove = (e) =>{

var x = e.pageX
var y = e.pageY

  light.style.top = y-270 + 'px';
}

document.addEventListener('mousemove', onMouseMove);
}
)

dot13.addEventListener("click", function(){
    dot13.style.animationPlayState = "paused";
    dot13.style.width = '3000px';
    dot13.style.height = '3000px';
    dot13.style.zIndex = '20';
    page2.style.color='#F8F5F0';
    page2.style.zIndex='30';
    page2.style.opacity='1';

    let light = document.getElementById('light');
    const onMouseMove = (e) =>{

    
    var x = e.pageX
    var y = e.pageY
    
      light.style.top = y-270 + 'px';
}
document.addEventListener('mousemove', onMouseMove);
}
)



var chooseElement;

const stop = function(element){
    const elements = document.querySelectorAll(".dot")

    elements.forEach(element => {
        element.addEventListener("click", () => {
            element.style.animationPlayState = "paused"
      
            }
)})}

