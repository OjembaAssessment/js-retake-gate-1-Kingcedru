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
let textSort = Object.fromEntries(Object.entries(parStore).sort(([,a], [,b]) => b - a))
let appier12 = Object.keys(Object.fromEntries(Object.entries(textSort).slice(1,13)))

// let sortedPara = Object.fromEntries(Object.entries(paraObject).sort(([,a], [,b]) => b - a))
// let twelveCommon = Object.keys(Object.fromEntries(Object.entries(sortedPara).slice(1,13)))
let one = document.createElement("p")
one.setAttribute("class", "one")
one.textContent = twelveCommon[0]
cloud.append(one)

console.log("Exercise 2 - Word Cloud");