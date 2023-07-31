//Assining the html tags
let par = document.querySelector("#myParagraph")
let parTextLower = par.textContent.toLowerCase().split(" ")
let parStore = {}


// Looping through the parTextLower
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

let textWord = document.getElementById("myWordCloud")

let appier1 = document.createElement("p")
appier1.setAttribute("class", "one")
appier1.textContent = appier12[0]
textWord.append(appier1)

let appier2 = document.createElement("p")
appier2.setAttribute("class", "two")
appier2.textContent = appier12[1]
textWord.append(appier2)


let appier3 = document.createElement("p")
appier3.setAttribute("class", "three")
appier3.textContent = appier12[2]
textWord.append(appier3)



let appier4 = document.createElement("p")
appier4.setAttribute("class", "four")
appier4.textContent = appier12[3]
textWord.append(appier4)



    

let appier5 = document.createElement("p")
appier5.setAttribute("class", "five")
appier5.textContent = appier12[4]
textWord.append(appier5)



    

let appier6 = document.createElement("p")
appier6.setAttribute("class", "six")
appier6.textContent = appier12[5]
textWord.append(appier6)



    

let appier7 = document.createElement("p")
appier7.setAttribute("class", "seven")
appier7.textContent = appier12[6]
textWord.append(appier7)



    

let appier8 = document.createElement("p")
appier8.setAttribute("class", "eight")
appier8.textContent = appier12[7]
textWord.append(appier8)



    

let appier9 = document.createElement("p")
appier9.setAttribute("class", "nine")
appier9.textContent = appier12[8]
textWord.append(appier9)



    

let appier10 = document.createElement("p")
appier10.setAttribute("class", "ten")
appier10.textContent = appier12[9]
textWord.append(appier10)



    

let appier11 = document.createElement("p")
appier11.setAttribute("class", "eleven")
appier11.textContent = appier12[10]
textWord.append(appier11)



    

let appier12T = document.createElement("p")
appier12T.setAttribute("class", "twelve")
appier12T.textContent = appier12[11]
textWord.append(appier12T)

console.log("Exercise 2 - Word Cloud");