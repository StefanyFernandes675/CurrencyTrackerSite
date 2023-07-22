// Obtenha as referências para os elementos usando JavaScript
const cardTitleElement = document.querySelectorAll('.card-title');
const cardValueElement = document.querySelectorAll('.card-value');

fetch("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=BRL&apikey=3CA5NGFKV8X0LY1K")
    .then(response => response.json())
    .then(data => {
        const results = data['Realtime Currency Exchange Rate'];
        console.log(results)
    })