let myCityName = document.querySelector(".nameOfCity");
let myCittyTime = document.querySelector(".timeOfCity");
let myInput = document.querySelector(".myInput");
let myBttn = document.querySelector(".btn");
let myImge = document.querySelector(".img-1");
let myWeather = document.querySelector(".myWeather");
let myNumWeather = document.querySelector(".num");
let myWindSpeed = document.querySelector(".windSpeed");
let myHumidity = document.querySelector(".humidity");
let myPressure = document.querySelector(".pressure");
let myBody = document.querySelector(".myBody");
myBttn.addEventListener("click", () => {
  fetch(`
    https://api.unsplash.com/search/photos?query=${myInput.value}&client_id=LT-f3weaPT3HQ9LSpHS0rlQuC9uz_hk5ky-jTqufz5k
  `)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      myBody.style.backgroundImage = `url("${data.results[0].urls.full}")`;
    });

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&units=metric&appid=74da28bbf984490e591553e5ec13a513`
  )
    .then((ress) => {
      return ress.json();
    })
    .then((dataa) => {
      myWeather.innerHTML = `${dataa.weather[0].main}`;

      console.log(dataa.weather[0].main);
      if (myWeather.innerHTML == "Rain") {
        myImge.src = "../images/rainy.png";
      } else if (myWeather.innerHTML == "Clouds") {
        myImge.src = "../images/clouds.png";
      } else if (myWeather.innerHTML == "Clear") {
        myImge.src = `../images/sun.png`;
      }
      myNumWeather.innerHTML = `${dataa.main.temp.toFixed(0)}`;
      myPressure.innerHTML = `${dataa.main.pressure}`;
      myHumidity.innerHTML = `${dataa.main.humidity}`;
      myWindSpeed.innerHTML = `${dataa.wind.speed}`;
      fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=Y1N9TFCHWJKZ&format=json&by=position&lat=${dataa.coord.lat}&lng=${dataa.coord.lon}`
      )
        .then((res) => {
          return res.json();
        })
        .then((daet) => {
          // console.log(daet.formatted);

          myCityName.innerHTML = daet.regionName + " / " + daet.countryName;
          myCittyTime.innerHTML = `Time ` + daet.formatted;
        });
    });
});
/*
 */
