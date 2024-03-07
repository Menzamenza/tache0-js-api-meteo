const APIKEY='87c4cae8b7706a0d272a22f17acf0e90'
// appel à API  openweather avec ville en paramètre de fonction 
let apiCall = function (city) {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`

    fetch(url)
    .then((response) =>
        response.json().then((data) =>{
        console.log(data)
        document.getElementById('city').innerHTML=data.name
        document.getElementById('temp').innerHTML= "<i class='fas fa-thermometer-half'></i>" +data.main.temp+'°'
        document.getElementById('humidity').innerHTML="<i class='fa-solid fa-droplet'></i> "+ data.main.humidity+'%'
        document.getElementById('wind').innerHTML="<i class='fa-solid fa-wind'></i>" + data.wind.speed+ 'Km/h' 
    })
    ).catch((error)=>console.error("Erreur:"+ error))
}

// ecouteur d'events sur la soumission du formulaire
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault()
    let ville=document.getElementById('inputCity').value
    apiCall(ville)
})
// appel par defaut à l'ouverture de la page
apiCall('Dakar')