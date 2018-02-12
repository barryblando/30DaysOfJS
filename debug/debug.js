function getStockSymbols(stocks) {
  /*var symbols = [],
      counter,
      stock;

  NOTE: forLoop Method
  for(counter = 0; counter < stocks.length; counter++) {
    stock = stocks[counter];
    symbols.push(stock.symbol);
  }

  NOTE: forEach Method
  stocks.forEach(stock => symbols.push(stock.symbol));

  return symbols;
  */

  // NOTE: Map Method
  return stocks.map(stock => stock.symbol);
}

const symbols = getStockSymbols([
  { symbol: 'XFX', price: 240.22, volume: 23423 },
  { symbol: 'TNZ', price: 332.12, volume: 234 },
  { symbol: 'JXJ', price: 140.22, volume: 5234 }
]);

console.log(JSON.stringify(symbols));

function getStocksOver(stocks, minPrice) {
  /*
    NOTE: ForEach Method
    var results = [];

    stocks.forEach(stock => stock.price >= minPrice ? results.push(stock) : '');

    return results;
  */
  // NOTE: Filter Method
  return stocks.filter(stock => stock.price >= minPrice);
}

const expensiveStocks = getStocksOver(
  [
    { symbol: 'XFX', price: 240.22, volume: 23423 },
    { symbol: 'TNZ', price: 332.12, volume: 234 },
    { symbol: 'JXJ', price: 140.22, volume: 5234 }
  ],
  150.00);

console.log(JSON.stringify(expensiveStocks));