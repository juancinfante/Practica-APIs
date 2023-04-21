const url = "https://api.thecatapi.com/v1/images/search?limit=10"
fetch(url)
  .then(res => res.json())
  .then(data => {
    const img = document.getElementById('img')
    img.src= data[0].url;
  })

function masGatos(){
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const img = document.getElementById('img')
    img.src= data[0].url;
  })
}
