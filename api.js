let cities = document.getElementById('cities')
let result = document.getElementById('result')
let search = document.getElementById('search')
let city = ""

search.addEventListener('click',function(){
city = cities.value
fetch(`https://api.weatherapi.com/v1/current.json?key=0a447dc803d64e249b192310252903&q=${city}&aqi=no`)
.then(response => response.json())

.then (data => {   
       result.innerHTML = `
       <p>Температура ${data.current.temp_c} C</p>
       <img src="https:${data.current.condition.icon}">
       <p> влажность ${data.current.humidity} C* | F* </p>
  
       
       
       `
    


}



)
}
)


    
