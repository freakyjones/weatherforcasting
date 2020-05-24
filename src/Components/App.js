import React from 'react'

import Header from './header'
import Weather from './weather'
import css from '../style/App.css'
class App extends  React.Component{
    constructor(){
        super()
        this.state={
            date:'',
            time:'',
            mintemp:'',
            maxtemp:'',
            sun:'',
            moon:''
        }
    } 
  componentDidMount(){
    this.Interval=setInterval(()=>{
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        
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
                     const celsius=(f)=>{
                       return  Math.round((5/9) * (f-32))  
                     }
                     const mintempf=res. DailyForecasts[0].Temperature.Minimum.Value;
                     const mintempc=celsius(mintempf);
                     const maxtempf=res. DailyForecasts[0].Temperature.Maximum.Value;
                     const maxtempc=celsius(maxtempf);
                     const day=res. DailyForecasts[0].Day.IconPhrase
                     const night=res. DailyForecasts[0].Night.IconPhrase
                     const date=new Date().toString()
                     const mdate= date.slice(4,11)

                   
                     const set=new Date()
                     const hours=(set.getHours())
                     const minutes=(set.getMinutes())
                     const hour=hours-12
                     let  P;
                     if(hours>=12){
                        P='PM'
                     }else{
                         P='AM'
                     }
                     const time=`${hour}.${minutes}${P} `
                      
    
                     this.setState(
                         {
                             mintemp:mintempc,
                             maxtemp:maxtempc,
                             sun:day,
                             moon:night,
                             date:mdate,
                             time:time
                        }
                        )
                     console.log(mintempc)
                     
                 })
            })
       
            
          
          });
      } else {
       console.log('geolocation is not available')
      }
    },1000)
  }
  componentWillUnmount(){
      clearInterval(this.Interval)
  }
  render(){
      return(
          <div>
          <Header/>
          <Weather 
          date={this.state.date}
          time={this.state.time}
          getdata={this.getdata}
          mintemp={this.state.mintemp}
          maxtemp={this.state.maxtemp}
          sun={this.state.sun}
          moon={this.state.moon}
          />
          </div>
      )
  }
}

export default App;