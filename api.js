const boutonMenu = document.querySelector(".menu_burger");
const navBar = document.querySelector(".nav");
const topSpan = document.querySelector(".topSpan");
const middleSpan = document.querySelector(".middleSpan");
const bottomSpan = document.querySelector(".bottomSpan");

boutonMenu.addEventListener("click", () => {
    navBar.classList.toggle("setMenu");
    topSpan.classList.toggle("topSpanBye");
    middleSpan.classList.toggle("middleSpanBye");
    bottomSpan.classList.toggle("bottomSpanBye");
})

let container = document.querySelector("#monApi");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f05ae3b506msh04d2e3981c72ee4p14f454jsnb1a83fe1da2c',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

const texte = document.querySelector("#text");
const btn = document.querySelector("#btn") 
btn.addEventListener("click" ,(e)=>{   e.preventDefault();
document.querySelector("#monApi").innerHTML = "";

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+texte.value, options)
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data)
    data.d.forEach( (res) => {
        console.log(data)
        container.innerHTML += 
        `
        <div class="card">

            <p><span class="info">Titre:</span> ${res.l}</p>
            <img src=${res.i.imageUrl} class="imgAPI">
            <p><span class="info">Année de sortie: ${res.y}</span></p>
            <p><span class="info">Catégorie:</span> ${res.qid}</p>
            
        </div>
        `
    })
})
})


