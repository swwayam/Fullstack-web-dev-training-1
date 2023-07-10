const div = document.getElementById("dd");

function btnClick() {
     getData(); // this waits till the data is received and runs once all the synchronous code is 
    console.log("btn CLicked wait till the data loads")
}   


async function getData(){
    const data = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    console.log(data)
    const json = await data.json();
    for(let i = 0; i < json.length; i++){
        await div.insertAdjacentHTML('afterend', `<h1>${json[i].name}</h1>`)
    }

    console.log(json)

    return json
}