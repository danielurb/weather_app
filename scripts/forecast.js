const key = 'FmdAhoo6EsZGAKhYTpNXHxYdQtHPS2z3';

// get weather information
const getWeather = async (id) => {
  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const responce = await fetch(base + query);
  const data = await responce.json();
  return data[0];
}


// get city information
const getCity = async (city) => {
  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const responce = await fetch(base + query)
  const data = await responce.json();

  return data[0];
}

// getCity('stargard').then(data => {
//   return getWeather(data.Key);
// }).then(data => {
//   console.log(data);
// }).catch(err => console.log(err));
