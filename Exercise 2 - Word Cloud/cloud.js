//Assining the html tags
let par = document.querySelector("#myParagraph")
let parTextLower = par.textContent.toLowerCase().split(" ")
let parStore = {}



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



// let four = document.createElement("p")
// four.setAttribute("class", "four")
// four.textContent = twelveCommon[3]
// cloud.append(four)



    

// let five = document.createElement("p")
// five.setAttribute("class", "five")
// five.textContent = twelveCommon[4]
// cloud.append(five)



    

// let six = document.createElement("p")
// six.setAttribute("class", "six")
// six.textContent = twelveCommon[5]
// cloud.append(six)



    

// let seven = document.createElement("p")
// seven.setAttribute("class", "seven")
// seven.textContent = twelveCommon[6]
// cloud.append(seven)



    

// let eight = document.createElement("p")
// eight.setAttribute("class", "eight")
// eight.textContent = twelveCommon[7]
// cloud.append(eight)



    

// let nine = document.createElement("p")
// nine.setAttribute("class", "nine")
// nine.textContent = twelveCommon[8]
// cloud.append(nine)



    

// let ten = document.createElement("p")
// ten.setAttribute("class", "ten")
// ten.textContent = twelveCommon[9]
// cloud.append(ten)



    

// let eleven = document.createElement("p")
// eleven.setAttribute("class", "eleven")
// eleven.textContent = twelveCommon[10]
// cloud.append(eleven)



    

let appier12T = document.createElement("p")
appier12T.setAttribute("class", "twelve")
appier12T.textContent = appier12[11]
textWord.append(appier12T)

console.log("Exercise 2 - Word Cloud");