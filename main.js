// Obtenha as referências para os elementos usando JavaScript
const cardTitleElement = document.querySelectorAll('.card-title');
const cardValueElement = document.querySelectorAll('.card-value');

fetch("https://cors-everywhere.onrender.com/https://api.hgbrasil.com/finance")
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        const currencies = results.currencies;
        const stocks = results.stocks;
        console.log(results)
    })