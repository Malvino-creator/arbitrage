

// Define the list of exchanges to check
const exchanges = [
    { name: "Kucoin", usdtFuturesPrice: 100 },
    { name: "Binance", usdtFuturesPrice: 101 },
    { name: "Huobi", usdtFuturesPrice: 102 },
    { name: "OKX", usdtFuturesPrice: 103 },
    { name: "Coinbase", usdtFuturesPrice: 104 },
    { name: "Bybit", usdtFuturesPrice: 105 },
    { name: "Bitget", usdtFuturesPrice: 106 },
    { name: "Bitfinex", usdtFuturesPrice: 107 },
  ];
  
  // Define the minimum arbitrage opportunity percentage
  const minArbOpportunity = 0.001;
  
  // Check for arbitrage opportunities
  for (let i = 0; i < exchanges.length; i++) {
    for (let j = i + 1; j < exchanges.length; j++) {
      const exchange1 = exchanges[i];
      const exchange2 = exchanges[j];
  
      const arbOpportunity = (exchange2.usdtFuturesPrice - exchange1.usdtFuturesPrice) / exchange1.usdtFuturesPrice;
  
      if (arbOpportunity > minArbOpportunity) {
        console.log(`Arbitrage opportunity found: Buy on ${exchange1.name} and sell on ${exchange2.name} for a profit of ${arbOpportunity * 100}%`);
      }
    }
  }
  