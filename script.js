const search=document.getElementById('button');

search.addEventListener('click',function(){
    const inputBtn=document.getElementById('input-btn').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=65337a61139f03c92acd82da0c23174c')
    .then(response=>response.json())
    .then(data=>{
        const cityName=data.name;
        const temperature=data.main.temp;
        const temp=temperature-273.15;
        const description=data.weather[0].description;

        document.getElementById('city').innerText=cityName;
        document.getElementById('temp').innerText=temp.toFixed(2);
        document.getElementById('description').innerText=description;
    })
    .catch(err =>alert('wrong city name !'))
})