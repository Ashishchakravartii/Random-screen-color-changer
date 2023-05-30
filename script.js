let btn = document.querySelector("button");
// console.log(btn)
// let main = document.querySelector(".main").style.backgroundColor="red";
// console.log(main)


btn.addEventListener("click", () => {
    let a = Math.round(Math.random() * 5);
    if (a == 0) {
     document.querySelector(".main").style.backgroundColor = "red";     
    }
    else if (a == 1) {
     document.querySelector(".main").style.backgroundColor = "green";     
    }
    else if (a == 2) {
     document.querySelector(".main").style.backgroundColor = "yellow";     
    }
    else if (a == 3) {
     document.querySelector(".main").style.backgroundColor = "orange";     
    }
    else if (a == 4) {
     document.querySelector(".main").style.backgroundColor = "blue";     
    }
    else if (a == 5) {
     document.querySelector(".main").style.backgroundColor = "brown";     
    }

})
