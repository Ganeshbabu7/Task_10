// Allocation of Variables :
const contentEl = document.getElementById("content")
const content2El = document.getElementById("content2")
const optionsEl = document.getElementById("filterSelction")
const inputEl = document.getElementById("input")
const searchEl = document.getElementById("button")
const paginationEl = document.getElementById("pagination")
const copyrights = document.getElementById("copyrights")
let pagesArr = [0,50,100,150,200,250,300,350,400,450,500];
let currentPage;
let result;
let gameFilter = [];
let games=[];
// Fetching datas from Static-API :
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4769da425msh40549d794191915p10ca83jsn03a37eb27a29',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'}
};

async function mmoGames () {
	try{
		let response = await fetch('https://mmo-games.p.rapidapi.com/games', options)
		result = await response.json();

		searchEl.addEventListener("click", ()=>{
			paginationEl.style.display = "none";
			copyrights.style.display = "none";
			let optionFilter = optionsEl.value
			let searchFilter = inputEl.value
			let filter = result.filter(data => data.genre === `${optionFilter}`)
			let search = result.filter(data => data.title === `${searchFilter}`)
			contentEl.innerHTML = "";

			if (optionFilter === "All Items") {firstPage()};
//  Search button click event :
			if (searchFilter === ""){
				contentEl.innerHTML = "";
				for (let i=0; i<50; i++){			
					let title = filter[i].title;
					let tumbnail = filter[i].thumbnail;
					let typeOfGame = filter[i].genre;
					let publisher = filter[i].publisher
					let developer = filter[i].developer;
					let gameLink = filter[i].game_url
					contentEl.innerHTML += `<div class="card" style="width: 18rem;">
											<img src="${tumbnail}" class="card-img-top" alt="...">
											<div class="card-body">
											<h5 class="card-title">${title}</h5>
											</div>
											<ul class="list-group list-group-flush">
											<li class="list-group-item">Type of Game : ${typeOfGame}</li>
											<li class="list-group-item">Publisher : ${publisher}</li>
											<li class="list-group-item">Developer : ${developer}</li>
											</ul>
											<div class="card-body">
											<a href="${gameLink}" class="card-link">Game Download link</a>
										</div>`
				
			} }
			if (searchFilter !== "") {
				contentEl.innerHTML = "";
				for (let i=0; i<100; i++){			
					let title = search[i].title;
					let tumbnail = search[i].thumbnail;
					let typeOfGame = search[i].genre;
					let publisher = search[i].publisher
					let developer = search[i].developer;
					let gameLink = search[i].game_url
					contentEl.innerHTML += `<div class="card" style="width: 18rem;">
										<img src="${tumbnail}" class="card-img-top" alt="...">
										<div class="card-body">
										<h5 class="card-title">${title}</h5>
										</div>
										<ul class="list-group list-group-flush">
										<li class="list-group-item">Type of Game : ${typeOfGame}</li>
										<li class="list-group-item">Publisher : ${publisher}</li>
										<li class="list-group-item">Developer : ${developer}</li>
										</ul>
										<div class="card-body">
										<a href="${gameLink}" class="card-link">Game Download link</a>
									</div>`
									paginationEl.innerHTML = ""
			} }	
		})
// Inserting datas to HTML :
		function firstPage () {
		for (let i=0; i<50; i++){			
			let title = result[i].title;
			let tumbnail = result[i].thumbnail;
			let typeOfGame = result[i].genre;
			let publisher = result[i].publisher
			let developer = result[i].developer;
			let gameLink = result[i].game_url
			contentEl.innerHTML += `<div class="card" style="width: 18rem;">
										<img src="${tumbnail}" class="card-img-top" alt="...">
										<div class="card-body">
										<h5 class="card-title">${title}</h5>
										</div>
										<ul class="list-group list-group-flush">
										<li class="list-group-item">Type of Game : ${typeOfGame}</li>
										<li class="list-group-item">Publisher : ${publisher}</li>
										<li class="list-group-item">Developer : ${developer}</li>
										</ul>
										<div class="card-body">
										<a href="${gameLink}" class="card-link">Game Download link</a>
									</div>`
			gameFilter.push(result[i].genre)
		}		
			function uniqueType (arr) {
				arr.forEach((e)=> {if (!games.includes(e)){games.push(e)}})
			}
			uniqueType (gameFilter)

			function typeOfGames(arr) {
				for (i=0; i<arr.length; i++) {optionsEl.innerHTML += `<option value="${arr[i]}">${arr[i]}</option>`}
			}
			typeOfGames(games);			
		}
	firstPage();
	}
	catch(err) {console.log(err)};
}
mmoGames();
// Common function creation for pagination :
function contentPush (a,b) {
	for (let i=a; i<b; i++){
		let title = result[i].title;
		let tumbnail = result[i].thumbnail;
		let typeOfGame = result[i].genre;
		let publisher = result[i].publisher
		let developer = result[i].developer;
		let gameLink = result[i].game_url
		contentEl.innerHTML += `<div class="card" style="width: 18rem;">
									<img src="${tumbnail}" class="card-img-top" alt="...">
									<div class="card-body">
									<h5 class="card-title">${title}</h5>
									</div>
									<ul class="list-group list-group-flush">
									<li class="list-group-item" id="typeOfGame">Type of Game : ${typeOfGame}</li>
									<li class="list-group-item">Publisher : ${publisher}</li>
									<li class="list-group-item">Developer : ${developer}</li>
									</ul>
									<div class="card-body">
									<a href="${gameLink}" class="card-link">Game Download link</a>
								</div>` }
}
//  Pagination :
function firstPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b)
}

function secondPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b)
}

function thirdPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b) 
}
function fourthPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b) 
}

function fifthPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b) 
}

function sixthPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b) 
}

function seventhPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b) 
}

function eightPage (a,b) {
	contentEl.innerHTML = ""
	contentPush(a,b) 
}