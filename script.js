
fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://api.sampleapis.com/coffee/iced')
  .then(response => response.json())
  .then(json => console.log(json))
