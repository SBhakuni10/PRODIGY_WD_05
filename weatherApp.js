const searchButton=document.querySelector('.my-button');
const input=document.querySelector('.input');
const weatherImg=document.querySelector('.sunny');
const temp=document.querySelector('.temp');
const weatherDescription=document.querySelector('.weather-description');
const humidity=document.querySelector('.text');
const wind=document.querySelector('.speed');

const locationNotFound=document.querySelector('.image-not-found');
const weatherData=document.querySelector('.weather-data');

async function myWeather(city){
    const api_key='1a233332abde7b6c3bbf8743e81b82d5';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const data= await fetch(`${url}`).then(response=>response.json());

    if(data.cod==='404'){
        locationNotFound.style.display="flex";
        weatherData.style.display="none";

        
        return ;
    }else{
        locationNotFound.style.display="none";
        weatherData.style.display="flex";
    }

    temp.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    weatherDescription.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind.innerHTML=`${data.wind.speed}km/H`;

    switch(data.weather[0].main){
        case 'Snow':
            weatherImg.src = "weatherAppimages/snow.png";
            break;
        case 'Mist':
            weatherImg.src = "weatherAppimages/mist.png";
            break;
        case 'Rain':
            weatherImg.src = "weatherAppimages/rain.png";
            break;
        case 'Clear':
            weatherImg.src = "weatherAppimages/clear.png"; 
            break; 
        case 'Wind':
            weatherImg.src = "weatherAppimages/wind.png";
            break;
        case 'Haze':
            weatherImg.src = "weatherAppimages/haze.png";
            break;
        case 'Clouds':
            weatherImg.src="weatherAppimages/cloud.png"
        default:
            console.log(`Unexpected weather condition: ${data.weather[0].main}`);
            break;
    }
    
};
searchButton.addEventListener('click', ()=>{
    myWeather(input.value)

});

