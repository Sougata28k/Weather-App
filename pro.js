// /api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key: "3595c8bb03cf9e2d6de50f9b7e70a07e",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchbox = document.getElementById('search-box');

//event listener funcion on keypress
searchbox.addEventListener('keypress',(event)=>{

    if(event.keyCode == 13){
        console.log(searchbox.value);
        getWeatherReport(searchbox.value);
        
    }
});

//get weather report

function getWeatherReport(city){

fetch(`${weatherApi.baseurl}?q= ${city}&appid=${weatherApi.key}&units=metric`)
.then(weather => {
    return weather.json();
}).then(showWeather);
}
//show weather report

function showWeather(weather){
    console.log(weather);

let city= document.getElementById('city');
city.innerText= `${weather.name} ,${weather.sys.country}`;

let temp =document.getElementById('temp');
temp.innerHTML =`${ Math.round(weather.main.temp)}&deg;c`

let minMaxTem =document.getElementById("hi-low");
minMaxTem.innerHTML =`${Math.floor(weather.main.temp_min)}&deg;c (min)/ ${Math.ceil(weather.main.temp_min)}&deg;c (max)`

let weatherType= document.getElementById('weatherType');
weatherType.innerText=`${weather.weather[0].main}`

let date =document.getElementById('date');
let todayDate =new Date();
date.innerText= dateManage(todayDate);
}

//date manage
function dateManage(dateArg){
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year =dateArg.getFullYear();
    let month =months[dateArg.getMonth()];
    let date= dateArg.getDate();
    let day =months[dateArg.getDay()];
    return `${day} ${date} ${month} ${year}`



}





