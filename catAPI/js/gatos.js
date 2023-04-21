
const url = "https://api.thecatapi.com/v1/images/search?limit=10"


  fetch(url)
  .then(res => res.json())
  .then(data => {

    for(i=0;i < data.length;i++){
      gatos.innerHTML += `<img src="${data[i].url}">`
    }
  })

  