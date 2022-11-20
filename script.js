
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function what() {
	let query = document.getElementById('query').value;
	let url = "https://lexica.art/api/v1/search?q=" + query;
	//console.log(url);
	let endpoint = url;
	let x = getRandomInt(50);
	let imgele = document.querySelector("#unsplashImage");
	let imgli = document.querySelector("#imageLink");
	let creator = document.querySelector("#creator");

	fetch(endpoint)
		.then(function(response) {
			return response.json();
			//console.log(response.json());
		})
		.then(function(jsonData) {
			let gui = jsonData.images[x].guidance;
			if (gui > 7)
				imgele.src = jsonData.images[x].src;
			else {
				x = getRandomInt(50);
				imgele.src = jsonData.images[x].src;
			}
			//console.log(jsonData.images[0]);
		})
}