const start = document.querySelector(".start")
const root = document.querySelector(".root")
const resetButton = document.querySelector(".resetButton").style.display = "none"


function myFunction() {
    document.querySelector(".start").style.display = "none"
    document.querySelector(".resetButton").style.display = "block"

    if (document.querySelector(".root").style.display === "none") {
        root.style.display = "block"

    }


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

function resetFunction() {
    const start = document.querySelector(".start").style.display = "block"
    const reset = document.querySelector(".resetButton").style.display = "none"
    const root = document.querySelector(".root").style.display = "none"
  
}










