window.addEventListener('load', () => { 

const tempDisplay = document.querySelector(".temperature"); 
const humidityDisplay = document.querySelector(".humidity");
const pressureDisplay = document.querySelector(".pressure");
const windSpeedDisplay = document.querySelector(".windSpeed"); 
const windDirectionDisplay = document.querySelector(".windDirection"); 


getWeatherSibculo(); 

//Weather display 
async function getWeatherSibculo() { 
    let apiKey = "19b653f3ac7eadb9a861e23697f93d04"
    let lat = 52.4819795;
    let lon = 6.6370606;
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    let response = await fetch(api); 
    let data = await response.json(); 
    console.log(data); 

    const {temp, humidity, clouds, rain, snow, pressure, wind_deg, wind_speed} = data.current
    

    tempDisplay.innerHTML = Math.floor(temp - 273.5); 
    humidityDisplay.innerHTML = humidity;
    pressureDisplay.innerHTML = pressure

    if (wind_deg > 0 && wind_deg < 45 || wind_deg > 314 && wind_deg < 361) {
        windDirectionDisplay.innerHTML = "N";
    } else if (wind_deg > 46 && wind_deg < 135) { 
        windDirectionDisplay.innerHTML = "O";
    } else if (wind_deg > 134 && wind_deg < 225) { 
        windDirectionDisplay.innerHTML = "Z";
    } else if (wind_deg > 224 && wind_deg < 315) { 
        windDirectionDisplay.innerHTML = "W";
    }

    windSpeedDisplay.innerHTML = wind_speed;

    //Set Skycons according to weathertype (NOTE: could also be a switch Case)
    let setIconFunction = () => { 
        let skycons = new Skycons({"color": "white"}); 
        if (temp > 260 && clouds < 30) { 
            skycons.add(document.querySelector("#icon"), Skycons.CLEAR_DAY);
        } else if (temp > 240 && clouds > 30) {
            skycons.add(document.querySelector("#icon"), Skycons.PARTLY_CLOUDY_DAY);    
        } else if (clouds > 80) { 
            skycons.add(document.querySelector("#icon"), Skycons.CLOUDY);
        } else if (rain > 5) { 
            skycons.add(document.querySelector("#icon"), Skycons.RAIN);
        } else if (rain > 20) { 
            skycons.add(document.querySelector("#icon"), Skycons.SLEET);
        } else if (snow > 10) { 
            skycons.add(document.querySelector("#icon"), Skycons.SNOW);
        } 


    skycons.play(); 
}
setIconFunction();
}
})


//Google Maps 

function initMap() { 
    let sibculo = {lat: 52.48378525295853, lng: 6.622646224726145 };
    let map = new google.maps.Map(document.getElementById("map"), {zoom: 15, center:sibculo});
    let marker = new google.maps.Marker({position: sibculo, map: map});
}

//NavBar Burger Funcionality 
const navSlide = () => { 
    const hamburger = document.querySelector('.hamburger'); 
    const nav = document.querySelector('.navBarLinks'); 

    hamburger.addEventListener('click', () => { 
        nav.classList.toggle('openMobileNav')
    })
}

navSlide();

//Gewassen Buttons to redirect to Youtube

const aardappelButton = document.querySelector("#aardappelButton");
const bietenButton = document.querySelector("#bietenButton");
const graanButton = document.querySelector("#graanButton");
const valeriaanButton = document.querySelector("#valeriaanButton");
const uienButton = document.querySelector("#uienButton");

aardappelButton.addEventListener("click", () => {
    const url = "https://www.youtube.com/watch?v=swY7fDB0n2Q&t=243s";
        window.open(url, '_blank').focus(); 
});

bietenButton.addEventListener("click", () => {
    const url = "https://www.youtube.com/watch?v=EpezpiIwtV0";
        window.open(url, '_blank').focus(); 
});

graanButton.addEventListener("click", () => {
    const url = "https://www.youtube.com/watch?v=5jFSE2FKrLQ&t=61s";
        window.open(url, '_blank').focus(); 
});

valeriaanButton.addEventListener("click", () => {
    const url = "https://www.youtube.com/watch?v=oSVu-vbiuPw&t=89s";
        window.open(url, '_blank').focus(); 
});

uienButton.addEventListener("click", () => {
    const url = "https://www.youtube.com/watch?v=9HTZVbfOAUY&t=20s";
        window.open(url, '_blank').focus(); 
});

//Gewassen Buttons to redirect to websites 

const aardappelInfoButton = document.querySelector("#aardappelInfoButton");
const bietenInfoButton = document.querySelector("#bietenInfoButton");
const graanInfoButton = document.querySelector("#graanInfoButton");
const valeriaanInfoButton = document.querySelector("#valeriaanInfoButton");
const uienInfoButton = document.querySelector("#uienInfoButton");

aardappelInfoButton.addEventListener("click", () => {
    const url = "https://www.avebe.nl/";
        window.open(url, '_blank').focus(); 
});

bietenInfoButton.addEventListener("click", () => {
    const url = "https://www.cosunbeetcompany.nl/";
        window.open(url, '_blank').focus(); 
});

graanInfoButton.addEventListener("click", () => {
    const url = "https://www.janbruins.nl/";
        window.open(url, '_blank').focus(); 
});

valeriaanInfoButton.addEventListener("click", () => {
    const url = "https://vnk-herbs.nl/";
        window.open(url, '_blank').focus(); 
});

uienInfoButton.addEventListener("click", () => {
    const url = "https://www.dacomex.nl/";
        window.open(url, '_blank').focus(); 
});