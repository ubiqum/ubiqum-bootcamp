
// async function fetchAsync () {
//     let response = await fetch("http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract&wt=json&indent=on");
//     let data = await response.json();
//     console.log(data);
//     return data;
// }

// fetchAsync()
//     .then(data => console.log(data))
//     .catch(reason => console.log(reason.message))


//"./pro-congress-117-senate.json"

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;
    console.log(superHeroes);
    document.getElementById("js").innerHTML = superHeroes.squadName;
    // populateHeader(superHeroes);
    // showHeroes(superHeroes);
  }