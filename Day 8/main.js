function capAll(){
    let textFromUser = document.getElementById("textarea")
    const upper = textFromUser.value.toUpperCase();
    textFromUser.value = upper
}

// toLowerCase()

function lowAll(){
    let textFromUser = document.getElementById("textarea")
    const lower = textFromUser.value.toLowerCase();
    textFromUser.value = lower
}

function firstCap(){
    let textFromUser = document.getElementById("textarea");
    console.log(textFromUser.value)
    const arr = textFromUser.value.split(" ")
    const newArr = [];

    // .split(" ") converts a string into an array

    // in js strings are immutable 
    // https://www.w3schools.com/jsref/jsref_slice_array.asp

    for(let i = 0; i < arr.length; i++){
       let newText = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
       newArr.push(newText)
    }

    console.log(newArr)

    textFromUser.value = newArr.join(" ")
}

function copy(){
    let textFromUser = document.getElementById("textarea");
    navigator.clipboard.writeText(textFromUser.value)
}

function wordCount(){
    let textFromUser = document.getElementById("textarea");
    let wordC = document.getElementById("wordCount")
    let charC = document.getElementById("charCount")

    if(textFromUser.value.length > 1){
        wordC.innerHTML = textFromUser.value.split(" ").length
    }else{
        wordC.innerHTML = 0
    }

    charC.innerHTML = textFromUser.value.split("").length
}