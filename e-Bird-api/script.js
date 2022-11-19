let birdEl = document.getElementById('bird')
let tbodyEl = document.getElementById('tbody')
let regionEl = document.getElementById('country')
let pagesEl = document.getElementById('pages')
let searchNameEl = document.getElementById('searchName')
let locationEl = document.getElementById("location")
let locationIdEl = document.getElementById("locationId")
let birdsCountEl = document.getElementById("birdsCount")
let latitudeEl = document.getElementById("latitude")
let longitudeEl = document.getElementById("longitude")
let searchEl = document.getElementById("search")
let resetEl = document.getElementById("reset")
let countEl = document.getElementById("rowcount")
let totalresultEl = document.getElementById("totalResult")
let iconEl = document.getElementById("icon")
let sidebarEl = document.getElementById("sidebar")
let rowCount = 50;
let country = "IN"
let response;
let result;

let requestOptions = {
    method: 'GET',
    headers: {'X-eBirdApiToken' : 'hj5rpeff3kie'}
}
async function eBird () {
    response = await fetch(`https://api.ebird.org/v2/data/obs/${country}/recent`, requestOptions)
    result = await response.json();
    console.log(result);

    let locationArr = []
    let locationIdArr = []
    let birdsCountArr = []
    let latitudeArr = []
    let longitudeArr = []
    let location = []
    let locationId = []
    let birdsCount = []
    let latitude = []
    let longitude = []

    function defaultData () {
        for (let i=0; i<rowCount; i++) {
            let comName = result[i].comName
            let sciName = result[i].sciName
            let locName = result[i].locName
            let locId = result[i].locId
            let howMany = result[i].howMany
            let lat = result[i].lat
            let lng = result[i].lng
            tbodyEl.innerHTML += `<tr>
                                  <td>${comName}</td>
                                  <td>${sciName}</td>
                                  <td>${locName}</td>
                                  <td>${locId}</td>
                                  <td>${howMany}</td>
                                  <td>${lat}</td>
                                  <td>${lng}</td> </tr>`
        let value = ""

        function valueCollection (key) {
            for (j of key){ value+= j }
            if (key == locName){locationArr.push(value)}
            if (key == locId){locationIdArr.push(value)}
            if (key == howMany){birdsCountArr.push(value)}
            if (key == lat){latitudeArr.push(value)}
            if (key == lng){longitudeArr.push(value)}
        }
        valueCollection(`${locName}`)
        value = "";
        valueCollection(`${locId}`)
        value = "";
        valueCollection(`${howMany}`)
        value = "";
        valueCollection(`${lat}`)
        value = "";
        valueCollection(`${lng}`)
        value = "";
        }
    } defaultData();
        function unique(arr) {
            arr.forEach(element => {
                if (!location.includes(element)) { if (arr === locationArr) { location.push(element)
                    location.sort()} }
                if (!locationId.includes(element)) { if (arr === locationIdArr) { locationId.push(element)
                    locationId.sort()} }
                if (!birdsCount.includes(element)) { if (arr === birdsCountArr) { birdsCount.push(element)
                    birdsCount.sort(function(a, b){return a - b}) } }
                if (!latitude.includes(element)) { if (arr === latitudeArr) { latitude.push(element)
                    latitude.sort(function(a, b){return a - b})} } 
                if (!longitude.includes(element)) { if (arr === longitudeArr) { longitude.push(element)
                    longitude.sort(function(a, b){return a - b})} }
            })  
        };
        unique(locationArr)
        unique(locationIdArr)
        unique(birdsCountArr)
        unique(latitudeArr)
        unique(longitudeArr)

        function optionsAdding (arr) {
            for (let i=0; i<arr.length; i++){
                if (arr === location) {locationEl.innerHTML +=`<option value="${location[i]}">${location[i]}</option>`}
                if (arr === locationId) {locationIdEl.innerHTML +=`<option value="${locationId[i]}">${locationId[i]}</option>`}
                if (arr === birdsCount) {birdsCountEl.innerHTML +=`<option value="${birdsCount[i]}">${birdsCount[i]}</option>`}
                if (arr === latitude) {latitudeEl.innerHTML +=`<option value="${latitude[i]}">${latitude[i]}</option>`}
                if (arr === longitude) {longitudeEl.innerHTML +=`<option value="${longitude[i]}">${longitude[i]}</option>`}
            }
        }
        optionsAdding(location);
        optionsAdding(locationId);
        optionsAdding(birdsCount);
        optionsAdding(latitude);
        optionsAdding(longitude);   
        let resultlength = result.length
        totalresultEl.innerHTML += resultlength;
}
eBird();

function data () {
    tbodyEl.innerHTML = ""
    for (let i=0; i<rowCount; i++) {
        let comName = resultFilter[i].comName
        let sciName = resultFilter[i].sciName
        let locName = resultFilter[i].locName
        let locId = resultFilter[i].locId
        let howMany = resultFilter[i].howMany
        let lat = resultFilter[i].lat
        let lng = resultFilter[i].lng
tbodyEl.innerHTML += `<tr><td>${comName}</td>
                          <td>${sciName}</td>
                          <td>${locName}</td>
                          <td>${locId}</td>
                          <td>${howMany}</td>
                          <td>${lat}</td>
                          <td>${lng}</td> </tr>`}
}

function reload () {
    searchNameEl.value = ""
    tbodyEl.innerHTML = ""
    locationEl.innerHTML = ""
    locationIdEl.innerHTML = ""
    birdsCountEl.innerHTML = ""
    latitudeEl.innerHTML = ""
    longitudeEl.innerHTML = ""
    totalresultEl.innerHTML = ""
    locationIdEl.innerHTML +=`<option value="All Items">All Items</option>`
    locationEl.innerHTML +=`<option value="All Items">All Items</option>`
    birdsCountEl.innerHTML +=`<option value="All Items">All Items</option>`
    latitudeEl.innerHTML +=`<option value="All Items">All Items</option>`
    longitudeEl.innerHTML +=`<option value="All Items">All Items</option>`
}

let resultFilter;
searchEl.addEventListener("click", () => {
    country = regionEl.value
    console.log(country);
    let search = searchNameEl.value
    let loc = locationEl.value
    let locId = locationIdEl.value
    let count = birdsCountEl.value
    let lat = latitudeEl.value
    let lon = longitudeEl.value

if (search !== "") {
    resultFilter = result.filter(data => data.comName == `${search}`)
    data()}
if (loc !== "All Items") {
    resultFilter = result.filter(data => data.locName == `${loc}`)
    data()}
if (locId !== "All Items") {
    resultFilter = result.filter(data => data.locId == `${locId}`)
    data()};
if (count !== "All Items") {
    resultFilter = result.filter(data => data.howMany == `${count}`)
    data()};
if (lat !== "All Items") {
    resultFilter = result.filter(data => data.lat == `${lat}`)
    data()};
if (lon !== "All Items") {
    resultFilter = result.filter(data => data.lng == `${lon}`)
    data()};  
if (country !==""){
    reload();
    eBird();
    } 
}) 

resetEl.addEventListener ('click', ()=>{
    rowCount = countEl.value;
    reload();
    eBird();
})

function optionChange () {
    rowCount = countEl.value;
    reload();
    eBird();
}



function sideBar () {
    if (sidebarEl.style.width === "0em") { sidebarEl.style.width = "60em" }
    else { 
        sidebarEl.style.width = "0em"
    }
}
