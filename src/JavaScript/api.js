// https://punkapi.com/documentation/v2

const API_URL = "https://api.punkapi.com/v2/beers";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const api = endpoint =>
  fetch(API_URL + endpoint, { headers }).then(res => res.json());

export default api;
