const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6107184db3mshe1ecf0f5322f994p1bb49ejsna5f8bf260220',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
		//shanghai
		shanghaiCloudPct.innerHTML = response.cloud_pct
        shanghaiFeelsLike.innerHTML = response.feels_like
        shanghaiHumidity.innerHTML = response.humidity
        shanghaiMaxTemp.innerHTML = response.max_temp
        shanghaiMinTemp.innerHTML = response.min_temp
        shanghaiSunrise.innerHTML = response.sunrise
        shanghaiSunset.innerHTML = response.sunset
        shanghaiTemp.innerHTML = response.temp
        shanghaiWindDegrees.innerHTML = response.wind_degrees
        shanghaiWindSpeed.innerHTML = response.wind_speed
		//Boston
		bostonCloudPct.innertHTML = response.cloud_pct  
        bostonFeelsLike.innertHTML = response.feels_like  
        bostonHumidity.innertHTML = response.humidity  
        bostonMaxTemp.innertHTML = response.max_temp  
        bostonMinTemp.innertHTML = response.min_temp  
        bostonSunrise.innertHTML = response.sunrise  
        bostonSunset.innertHTML = response.sunset  
        bostonTemp.innertHTML = response.temp  
        bostonWindDegrees.innertHTML = response.wind_degrees  
        bostonWindSpeed.innertHTML = response.wind_speed  
		//Lucknow
		//Kolkata
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault( )
	getWeather(city.value)
})

getWeather("Delhi")