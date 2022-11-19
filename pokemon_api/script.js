// Allocation of Variables :
let divEL = document.getElementById('cards')
let data1;
let image;
let result;
// Fetching datas from Static-API :
let pokemon = async function () {
    try {
        let url = 'https://api.pokemontcg.io/v2/cards'
        let response = await fetch(url);
        data1 = await response.json();
        for (i=0; i<48 ; i++){
            image = data1.data[i].images.small;
            result = `<img src='${image}' class='images'></img>`
            divEL.innerHTML += result;
        }
    }
    catch (err) {
        console.log(err);
    }
}
pokemon();
// Pagination :
function firstPage() {
    divEL.innerHTML = "";
    for (i=0; i<48 ; i++){
        image = data1.data[i].images.small;
        result = `<img src='${image}' class='images'></img>`
        divEL.innerHTML += result;
    }
}

function secondPage() {
    divEL.innerHTML = "";
    for (i=50; i<98 ; i++){
        image = data1.data[i].images.small;
        result = `<img src='${image}' class='images'></img>`
        divEL.innerHTML += result;
    }
}

function thirdPage() {
    divEL.innerHTML = "";
    for (i=100; i<148 ; i++){
        image = data1.data[i].images.small;
        result = `<img src='${image}' class='images'></img>`
        divEL.innerHTML += result;
    }
}

function fourthPage() {
    divEL.innerHTML = "";
    for (i=150; i<198 ; i++){
        image = data1.data[i].images.small;
        result = `<img src='${image}' class='images'></img>`
        divEL.innerHTML += result;
    }
}

function fifthPage() {
    divEL.innerHTML = "";
    for (i=200; i<248 ; i++){
        image = data1.data[i].images.small;
        result = `<img src='${image}' class='images'></img>`
        divEL.innerHTML += result;
    }
}