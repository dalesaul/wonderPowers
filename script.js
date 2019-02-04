document.querySelector("#activate-flight").addEventListener("click", ()=>{
document.querySelector("#flight").classList.toggle("enabled");

})

document.querySelector("#activate-mindreading").addEventListener("click", ()=>{
    document.querySelector("#mindreading").classList.toggle("enabled");

})

document.querySelector("#activate-xray").addEventListener("click", ()=>{
    document.querySelector("#xray").classList.toggle("enabled");

})

document.querySelector("#activate-all").addEventListener("click", ()=>{
    document.querySelector("#powerList").classList.toggle("enabled");
})

document.querySelector("#deactivate-all").addEventListener("click", ()=>{
        document.querySelector("#powerList").classList.toggle("enabled");
})