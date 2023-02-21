var chooseElement;

const move = function(element){
    const elements = document.querySelectorAll(".rightdoor")

    elements.forEach(element => {
        element.addEventListener("mousedown", () => {
            element.style.position = "absolute"
            chooseElement = element

            document.onmousemove = (e) => {
                var x = e.pageX
                var y = e.pageY

                chooseElement.style.left = x-300 + "px"
            

            }
        })
    })
    document.onmouseup = function(e){
        chooseElement = null
    }
}

var chooseElement;

const moveleft = function(element){
    const elements = document.querySelectorAll(".leftdoor")

    elements.forEach(element => {
        element.addEventListener("mousedown", () => {
            element.style.position = "absolute"
            chooseElement = element

            document.onmousemove = (e) => {
                var x = e.pageX
                var y = e.pageY

                chooseElement.style.left = x-660 + "px"
            

            }
        })
    })
    document.onmouseup = function(e){
        chooseElement = null
    }
}