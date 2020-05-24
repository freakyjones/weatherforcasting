

const temp=document.querySelector('#temp')
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
let lati=position.coords.latitude;
let longi=position.coords.longitude;
let locationkey;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=%094xjaaKDsIa4nUVcL7ZbhfMaDbKgUC1VT&q=${lati}%2C${longi}&details=true`)
        .then(data=>{
            return data.json();
        })
        .then(res=>{
             locationkey=res.Key;
             
             fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationkey}?apikey=4xjaaKDsIa4nUVcL7ZbhfMaDbKgUC1VT`)
             .then(data=>{
                 return data.json()
             })
             .then(res=>{
                 console.log(res)
                 console.log(res. DailyForecasts[0]);
                 
             })
        })
   
        
      
      });
  } else {
   console.log('geolocation is not available')
  }






