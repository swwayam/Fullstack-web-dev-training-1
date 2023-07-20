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
        await div.insertAdjacentHTML('afterend',  `<div class="card w-25 mx-auto">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">${json[i].name}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">${json[i].city}</a>
        </div>
        </div>`  )
    }

    console.log(json)

    return json
}