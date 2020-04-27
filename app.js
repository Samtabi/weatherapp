const api={
	key:"7cac8d23c3059d1fdd26961a6a513195",
    base:"https://api.openweathermap.org/data/2.5",
}

const searchBox =document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt){
	if (evt.keyCode == 13){
		getResults(searchBox.value);
		console.log(searchBox.value);
	}
}

function getResults(query){

	fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
	.then(weather => {
		return weather.json();

	}).then(displayResults);
}




function displayResults(weather){
	console.log(weather);
}











// 7cac8d23c3059d1fdd26961a6a513195