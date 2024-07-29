console.dir("jai shree ram") // EVENTS IN JS 
// question 1
let mode =document.querySelector("#mode");
let cuuMode="light "
mode.addEventListener("click",()=>{
    if(cuuMode==="light"){
        cuuMode="dark";
        document.querySelector("body").style.backgroundColor="black"
    } else{
        cuuMode="light";
        document.querySelector("body").style.backgroundColor="white"

    }
    console.log(cuuMode)
})
