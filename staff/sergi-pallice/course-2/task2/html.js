
// async function fetchAsync () {
//     let response = await fetch("http://http://localhost:8000/pro-congress-117-senate.json");
//     let data = await response.json();
//     console.log(data);
//     return data;
// }

// fetchAsync()
//     .then(data => console.log(data))
//     .catch(reason => console.log(reason.message))

let data = []     // Empty variable to save our Senators

async function fetchAsync () {
   await fetch("http://localhost:8000/pro-congress-117-senate.json")
      .then( (response) => {
        return response.json();         // Saving response into JSON format (because we know)   
      })
      .then( (json)=> {
        data = json.results[0].members // This places itself in the array with all members
        console.log(data)
      })
     //.catch(reason => console.log(reason.message))
    
      let members = []
      for (var i=0; i<data.length; i++) {
        members.push(document.getElementById("congress").innerHTML = data[i]["first_name"] + ' ' +  data[i]["last_name"])
      }
    document.getElementById("congress").innerHTML = members

}

fetchAsync()