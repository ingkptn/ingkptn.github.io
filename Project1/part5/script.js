var chooseElement;

const move = function(element){
    const elements = document.querySelectorAll(".puzzle")

    elements.forEach(element =>{
        element.addEventListener("mousedown", () => {
  
            element.getElementsByClassName.position = "absolute"
            chooseElement = element

            document.onmousemove = (e) => {
                var x = e.pageX
                var y = e.pageY

                chooseElement.style.left = x -100 + "px"
                chooseElement.style.top = y - 150 + "px"
            }
        })
    })
    document.onmouseup = function(e){
        chooseElement = null
    }
}


function hint() {
    var element= document.getElementsByClassName('hint');
    
    for(var x=0;x<element.length;x++)
    {element[x].style.opacity="1";}
    
    button= document.getElementById('hintbutton');
    button.style.opacity='0';
}
