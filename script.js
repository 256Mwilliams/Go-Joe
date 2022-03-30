  //fetch('https://api.sampleapis.com/coffee/hot')
  //.then(response => response.json())
  //.then(json => console.log(json))

  // fetch('https://api.sampleapis.com/coffee/iced')
  //.then(response => response.json())
  //.then(json => console.log(json))

  let resultOne = document.querySelectorAll('.base')

  resultOne.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value)
    }
  })
})

let resultTwo = document.querySelectorAll('.ingredients')

  resultTwo.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value)
    }
  })
})

let resultThree = document.querySelectorAll('.roast')

  resultThree.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value)
    }
  })
})

let resultFour = document.querySelectorAll('.flavor')

  resultFour.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value)
    }
  })
})

let resultFive = document.querySelectorAll('.temp')

  resultFive.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value)
    }
  })
})


