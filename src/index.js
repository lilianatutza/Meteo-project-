function refreshWeather(response) {
  console.log(response.data);
}

function searchCity(city) {
let apiKey = "bb604a31635tbbcod35f93428afe08ae";
let apiURL =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&untis=metric"`;
  axios.get(apiURL).then(refreshWeather)
  
}



function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);
