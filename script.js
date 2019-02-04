document.querySelector("#activate-flight").addEventListener("click", ()=>{

    document.querySelector("#flight").classList.toggle("enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", ()=>{
    
    document.querySelector("#mindreading").classList.toggle("enabled");
})

document.querySelector("#activate-xray").addEventListener("click", ()=>{
    
    document.querySelector("#xray").classList.toggle("enabled");
}) 


document.querySelector("#activate-all").addEventListener("click", () => {
    const allPowers = document.querySelector("#powerlist")
    allSection.forEach(singleSection => {
        document.singleSection.classList.replace("disabled", "enabled");})
})

document.querySelector("#deactivate-all").addEventListener("click", () => {
        const noPowers = document.querySelector("#powerList")
        // console.log(noPowers);
        allSection.forEach(singleSection => { 
            document.singleSection.classList.replace("enabled", "disabled");})
})
        

// document.querySelector("#activate-all").addEventListener("click", ()=> {
//     document.querySelector("#powerList").classList.toggle("enabled");
// })

// document.querySelector("#deactivate-all").addEventListener("click", ()=>{
//         document.querySelector("#powerList").classList.toggle("enabled");
// })