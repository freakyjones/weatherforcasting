import React from 'react'


const Weather =(props)=>{
    return(
        <content>
        <div id="time">
          <img src="./img/time.svg" alt=""  onClick={props.detdata} / >
    <h1 >{props.date}</h1>
    <h2>{props.time}</h2>
        </div>
        <div id="temp">
            <img src="./img/temp.svg" alt=""/>
            <h1>min {props.mintemp} <img src="./img/degree.svg" alt="mindeg_img" class="deg"/></h1>
            <h1>max {props.maxtemp} <img src="./img/degree.svg" alt="min_dig_img" class="deg"/> </h1> 
        </div>
        <div id="sun">
            <img src="./img/sun.svg" alt="sun_img"/>
    <h1>{props.sun}</h1>
        </div>
        <div id="moon">
            <img src="./img/moon.svg" alt="moon_img"/>
    <h1>{props.moon}</h1>
        </div>  
    </content>
    )
}
export default Weather