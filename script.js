const start = document.querySelector(".start")

start.addEventListener("click", function () {
    document.querySelector(".start").innerText = " " 
    const box = document.createElement("div")
    start.appendChild(box)

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

})
