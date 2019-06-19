const mybtn = document.getElementById("btn").addEventListener("click", counter)
const result = document.createElement("h1")
let clicks = localStorage.getItem("ponies")


function counter(){
    // if (clicks ===0) {
    //     clicks = 0
    // }
    clicks++
    result.textContent = clicks
    document.body.appendChild(result)
    localStorage.setItem("ponies", clicks)
}









