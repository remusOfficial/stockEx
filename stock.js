var request = require('request');

setInterval (function(){
    request("https://www.google.com/finance/info?client=ig&q=aapl", function(error, response, body) {
    body = body.slice(3);
    body = JSON.parse(body);
    console.log(body);
    newPriceAAPL(body);
});
}, 10000);

function newPriceAAPL(arr) {
  currentPriceAAPL = arr[0]["l"];
  currentUpDownAAPL = arr[0]["c_fix"];
  document.getElementById('priceAAPL').innerHTML = "<h2>Price: " + currentPriceAAPL + "</h2>";
  document.getElementById('updownAAPL').innerHTML = "<h2>Up/Down: " + currentUpDownAAPL + "</h2>";
}

setInterval (function(){
  request("https://www.google.com/finance/info?client=ig&q=googl", function(error, response, body) {
    body = body.slice(3);
    body = JSON.parse(body);
    console.log(body);
    newPriceGOOGL(body);
  });
}, 10000);

function newPriceGOOGL(arr){
  currenPriceGOOGL = arr[0]["l"];
  currentUpDownGOOGL = arr[0]["c_fix"];
  document.getElementById('priceGOOGL').innerHTML = currenPriceGOOGL;
  document.getElementById('updownGOOGL').innerHTML = currentUpDownGOOGL;
}
