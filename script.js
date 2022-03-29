
fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => response.json())
  .then(json => console.log(json))

  function* yourCoffee () {
    yield 8;
    yield 9
    yield 10;
  }

  var coffeeGenerator = yourCoffee ();

  console.log(coffeeGenerator);