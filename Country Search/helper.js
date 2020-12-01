// Formats response to look presentable on webpage
const renderCountry = function (data, className = '') {
  console.log(data.languages[0].name)
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};


 const displayResults = function(event) {
  event.preventDefault();
  while (countriesContainer.firstChild) {
    countriesContainer.removeChild(countriesContainer.firstChild);
  }
  //getCountry(countryInput.value);
  getCountryAndNeighbour(countryInput.value)
};


// xhr.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   renderCountry(data);
//   console.log(data)
//   let neighbour = xhr.response.borders[0];
//   if (!neighbour) {
//       return 'No neighbour'
//   }

//   const xhr2 = new XMLHttpRequest();


// xhr2.responseType = 'json';

// xhr2.onreadystatechange = () => {
//   if (xhr2.readyState === XMLHttpRequest.DONE) {
//       const [data] = xhr2.response;
//       console.log([data])
//         renderCountry(data, 'neighbour');
//   }
  
// }

// xhr2.open('GET', `${alpha}${neighbour}`)
// xhr2.send()

// })
