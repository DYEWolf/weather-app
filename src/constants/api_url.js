const location = "Buenos Aires,ar";
const api_key = "cd0f395e7ef007e883113ebf9b9ec3cc";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_url = `${url_base_weather}?q=${location}&appid=${api_key}`;