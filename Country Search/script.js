// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch")


// const getCountry = (country) => {
//     let url = 'https://restcountries.eu/rest/v2/name/'

//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             const [data] = xhr.response;
//             console.log(data)
//               renderCountry(data);
//         }
        
//     }

//     xhr.open('GET', `${url}${country}`)
//     xhr.send()
// }

btn.addEventListener('click', displayResults)

const getCountryAndNeighbour = (country) => {
    let url = 'https://restcountries.eu/rest/v2/name/';
    let alpha = 'https://restcountries.eu/rest/v2/alpha/';

    const xhr = new XMLHttpRequest();


    xhr.responseType = 'json';

    const request = new XMLHttpRequest();
    request.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const [data] = xhr.response;
            console.log(data)
              renderCountry(data);
        }
        
    }

    xhr.addEventListener('load', function () {
        const [data] = xhr.response
        console.log(data)
        let neighbour = data.borders[0];
        console.log(neighbour)

     const request = new XMLHttpRequest();
     request.responseType = 'json';

     request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            const data = request.response;
              renderCountry(data, 'neighbour');
        }
        
    }

    request.open('GET', `${alpha}${neighbour}`)
    request.send()

    })

    xhr.open('GET', `${url}${country}`)
    xhr.send()

    
    
  
}