const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
		'X-RapidAPI-Key': '92f1976787msh64363e236738f77p158767jsn9e09ea56b99d'
	}
};

fetch('https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/2020-06-10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
