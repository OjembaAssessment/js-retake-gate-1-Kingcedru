//Assining the html tags
let par = document.querySelector("#myParagraph")
let parTextLower = par.textContent.toLowerCase().split(" ")
let parStore = {}
// let cloud = document.getElementById("myWordCloud")


for(let x = 0; x < parTextLower.length; x++){
    if(parStore.hasOwnProperty(parTextLower[x])){
        parStore[parTextLower[x]]++
    }
    else{
        parStore[parTextLower[x]] = 1
    }
}
console.log(parStore)
// let sortedPara = Object.fromEntries(Object.entries(paraObject).sort(([,a], [,b]) => b - a))
// let twelveCommon = Object.keys(Object.fromEntries(Object.entries(sortedPara).slice(1,13)))

console.log("Exercise 2 - Word Cloud");