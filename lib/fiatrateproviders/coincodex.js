var provider = {
  name: 'Coincodex',
  url: 'https://coincodex.com/api/coincodex/get_coin/SPK/',
  parseFn: function(raw, data) {
    //var price_btc = parseFloat(data[0].price_btc);
    return [{
      code: 'USD',
      value: (parseFloat(raw.last)).toFixed(2)
    }];
  }
};

module.exports = provider;
