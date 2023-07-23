    const cardValues = [
        { currency: 'BTC', element: 'card-value-bitcoin' },
        { currency: 'JPY', element: 'card-value-yen' },
        { currency: 'ARS', element: 'card-value-peso' },
        { currency: 'AUD', element: 'card-value-australiano' },
        { currency: 'CAD', element: 'card-value-canadense' },
        { currency: 'EUR', element: 'card-value-euro' },
        { currency: 'GBP', element: 'card-value-libra' },
        { currency: 'KRW', element: 'card-value-won' }
      ];

    const key = "3CA5NGFKV8X0LY1K";
      
      function updateCardValue(currency, elementId) {
        fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency}&to_currency=BRL&apikey=${key}`)
          .then(response => response.json())
          .then(data => {
            const results = data['Realtime Currency Exchange Rate'];
            const price = results['5. Exchange Rate'];
            const cardValueElement = document.getElementById(elementId);
            cardValueElement.innerHTML = "R$ " + price;
          });
      }
      
      cardValues.forEach(({ currency, element }) => updateCardValue(currency, element));
      
