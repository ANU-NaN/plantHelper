const API_KEY = ''; //openweathermap API_KEY 사용

window.onload = function() {
  navigator.geolocation.getCurrentPosition(success, fail);
};

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then(response => response.json())  // 응답을 JSON 형태로 변환
    .then(json => {
      // JSON 데이터를 콘솔에 출력
      console.log(json);

      // 날씨 정보를 화면에 출력
      const weatherDiv = document.getElementById('weather');
      const sunrise = new Date(json.sys.sunrise * 1000).toLocaleTimeString();  // 일출 시간 변환
      const sunset = new Date(json.sys.sunset * 1000).toLocaleTimeString();  // 일몰 시간 변환

      weatherDiv.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" alt="날씨 아이콘">
        <p>위치: ${json.name}</p>
        <p>날씨: ${json.weather[0].description}</p>
        <p>온도: ${json.main.temp}°C</p>
        <p>최저/최고 온도: ${json.main.temp_min}°C / ${json.main.temp_max}°C</p>
        <p>풍속: ${json.wind.speed} m/s, 풍향: ${json.wind.deg}°</p>
      `;
      // <p>구름량: ${json.clouds.all}%</p>
      // <p>습도: ${json.main.humidity}%</p>
      // <p>가시거리: ${json.visibility} m</p>
      // <p>일출: ${sunrise}</p>
      // <p>일몰: ${sunset}</p>
    })
    .catch(error => console.error('에러 발생:', error));
}

const fail = () => {
  alert('위치 정보를 가져오지 못했습니다. 다시 시도해주세요.');
}