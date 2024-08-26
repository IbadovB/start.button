const start = document.querySelector(".start")
const root = document.querySelector(".root")
const reset = document.querySelector(".resetButton").style.display = "none"

function myFunction() {
    start.style.display = "none"
    const reset = document.querySelector(".resetButton").style.display = "block"
    const box = document.createElement("div")
    root.appendChild(box)

    box.style.width = "100px"
    box.style.height = "100px"
    box.style.border = "1px solid black"
    box.style.background = "red"


    box.addEventListener("mouseover", mouseOver)
    box.addEventListener("mouseout", mouseOut)

    function mouseOver() {
        box.style.color = "white";
        box.style.background = "green";
        box.innerHTML = "RƏNG QIRMIZIDAN YAŞILA KEÇDİ"
        box.style.textAlign = "center"
        box.style.paddingTop = "20px"
    }


    function mouseOut() {
        box.style.background = "red";
        box.innerHTML = " "
    }
    
   }

   function resetFunction () {
    const reset = document.querySelector(".resetButton").style.display  = "none"
    const root = document.querySelector(".root").style.display = "none"
    const start = document.querySelector(".start").style.display= "block"
}

