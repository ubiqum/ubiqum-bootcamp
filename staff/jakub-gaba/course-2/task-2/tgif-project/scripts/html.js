
var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
var urlHouse = 'https://api.propublica.org/congress/v1/117/house/members.json';





if ((window.location.href == "http://127.0.0.1:5500/course-2/task-2/tgif-project/Members.html")
  || (window.location.href == "http://127.0.0.1:5500/course-2/task-2/tgif-project/Members.html?chamber=senate")
  || (window.location.href == "http://127.0.0.1:5500/course-2/task-2/tgif-project/Members.html?chamber=house")) {


  var dataSeparation = {
    independent: {
      name: [],
      party: []
    },
    democrats: {
      name: [],
      party: []
    },
    republicans:
    {
      name: [],
      party: []
    }
  };
  var congressData;
  var Republicans = document.querySelector("input[id=republicanscheckbox]");
  var Democrats = document.querySelector("input[id=democratscheckbox]");
  var Independent = document.querySelector("input[id=independentcheckbox]");
  var addStates = document.getElementById("states_add");
  document.getElementById("states_add").onchange = function () { changing() };
  var webChange = document.getElementById("webChange");
  //curl --request GET https://api.propublica.org/congress/v1/117/house/members.json --header "X-Api-Key:werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn"
  var searchParams = new URLSearchParams(window.location.search);
  var chamberSave;

  // ----------- Pushing and sorting to an array Republicans, Democrats, Indepentent groups. -------------
  webChange.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(chamberSave + " Chamber");
    if (evt.target.innerHTML == "HOUSE" || chamberSave == "House") {
      console.log("HOUSE CHAMBER" + chamberSave);
      searchParams.set("chamber", "house");
      window.location.search = searchParams.toString();
      fetchJson();
    }
    else {
      searchParams.set("chamber", "senate");
      window.location.search = searchParams.toString();
      fetchJson();
    }
  });


  // -------------   State filter for changing   -------------
  function changing() {
    if (Republicans.checked || Democrats.checked || Independent.checked) {
      filterStateChanger();
    }
    else {
      document.getElementById("statesChangeRep").innerHTML = "";
      document.getElementById("statesChangeDem").innerHTML = "";
      document.getElementById("statesChangeInd").innerHTML = "";
    }
  }
  function filterStateChanger() {
    var stateRep = "statesChangeRep";
    var stateDem = "statesChangeDem";
    var stateInd = "statesChangeInd";
    document.getElementById("R").innerHTML = "";
    document.getElementById("D").innerHTML = "";
    document.getElementById("ID").innerHTML = "";
    document.getElementById("statesChangeRep").innerHTML = "";
    document.getElementById("statesChangeDem").innerHTML = "";
    document.getElementById("statesChangeInd").innerHTML = "";
    for (let i = 0; i <= congressData.results[0].members.length - 1; i++) {
      if (congressData.results[0].members[i].state.includes(document.getElementById("states_add").value) == true) { //porovnava jestli stat na indexu obsahuje stat zadanej
        if ((congressData.results[0].members[i].party == "R") && (Republicans.checked)) {
          document.getElementById("R").innerHTML = "";
          writeToHTML(stateRep, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
        }
        else if ((congressData.results[0].members[i].party == "D") && (Democrats.checked)) {
          document.getElementById("D").innerHTML = "";
          writeToHTML(stateDem, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
        }
        else if ((congressData.results[0].members[i].party == "ID") && (Independent.checked)) {
          document.getElementById("ID").innerHTML = "";
          writeToHTML(stateInd, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
        }
        else if ((congressData.results[0].members[i].party == "R") && (congressData.results[0].members[i].party == "D") && (Democrats.checked) && (Republicans.checked)) {
          document.getElementById("D").innerHTML = "";
          document.getElementById("R").innerHTML = "";
          if (congressData.results[0].members[i].party == "R") {
            writeToHTML(stateRep, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
          }
          else {
            writeToHTML(stateDem, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
          }
        }
        else if ((congressData.results[0].members[i].party == "R") && (congressData.results[0].members[i].party == "ID") && (Independent.checked) && (Republicans.checked)) {
          document.getElementById("ID").innerHTML = "";
          document.getElementById("R").innerHTML = "";
          if (congressData.results[0].members[i].party == "R") {
            writeToHTML(stateRep, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
          }
          else {
            writeToHTML(stateInd, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
          }
        }
        else if ((congressData.results[0].members[i].party == "D") && (congressData.results[0].members[i].party == "ID") && (Independent.checked) && (Democrats.checked)) {
          document.getElementById("D").innerHTML = "";
          document.getElementById("ID").innerHTML = "";
          if (congressData.results[0].members[i].party == "D") {
            writeToHTML(stateDem, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
          }
          else {
            writeToHTML(stateInd, congressData.results[0].members[i].first_name, congressData.results[0].members[i].last_name, congressData.results[0].members[i].party);
          }

        }
        else {

        }
      }
    }
  }
  function writeToHTML(idBro, nameBud, lastNameBud, party) {
    var row = document.getElementById(idBro).insertRow();
    var nameCell = row.insertCell();
    var partyCell = row.insertCell();
    nameCell.innerHTML = nameBud + " " + lastNameBud;
    if (party == "R") {
      partyCell.innerHTML = "Republican";
    }
    else if (party == "D") {
      partyCell.innerHTML = "Democrat";
    }
    else {
      partyCell.innerHTML = "Independent";
    }
  }
  // Listener for checkboxes of Republicans -------------
  Republicans.addEventListener('change', function () {
    if (this.checked && (document.getElementById("states_add").value == "") == true) {
      for (let i = 0; i <= dataSeparation.republicans.name.length - 1; i++) {
        var row = document.getElementById("R").insertRow();
        var cell = row.insertCell();
        var partyCell = row.insertCell();
        cell.innerHTML = dataSeparation.republicans.name[i];
        partyCell.innerHTML = dataSeparation.republicans.party[i];
        console.log(dataSeparation.republicans.party.length);
      }
    }
    else if (!this.checked) {
      document.getElementById("statesChangeRep").innerHTML = "";
      document.getElementById("R").innerHTML = "";
    }
    else if (this.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else if (this.checked && Democrats.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else if (this.checked && Independent.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else {
      document.getElementById("R").innerHTML = "";
    }
  });
  // Listener for checkboxes of Democrats -------------
  Democrats.addEventListener('change', function () {
    if (this.checked && (document.getElementById("states_add").value == "") == true) {
      for (let i = 0; i <= dataSeparation.democrats.name.length - 1; i++) {
        var row = document.getElementById("D").insertRow();
        var cell = row.insertCell();
        var partyCell = row.insertCell();
        cell.innerHTML = dataSeparation.democrats.name[i];
        partyCell.innerHTML = dataSeparation.democrats.party[i];
        console.log(dataSeparation.democrats.party.length);
      }
    }
    else if (!this.checked) {
      document.getElementById("statesChangeDem").innerHTML = "";
      document.getElementById("D").innerHTML = "";
    }
    else if (this.checked && (document.getElementById("states_add").value == "") == false) {
      console.log(document.getElementById("states_add").value == "");
      changing();
    }
    else if (this.checked && Republicans.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else if (this.checked && Independent.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else {
      document.getElementById("D").innerHTML = "";
    }
  });
  // Listener for checkboxes of Indepentent -------------
  Independent.addEventListener('change', function () {
    if (this.checked && (document.getElementById("states_add").value == "") == true) {
      for (let i = 0; i <= dataSeparation.independent.name.length - 1; i++) {
        var row = document.getElementById("ID").insertRow();
        var cell = row.insertCell();
        var partyCell = row.insertCell();
        cell.innerHTML = dataSeparation.independent.name[i];
        partyCell.innerHTML = dataSeparation.independent.party[i];
        console.log(dataSeparation.independent.party.length);
      }
    }
    else if (!this.checked) {
      document.getElementById("statesChangeInd").innerHTML = "";
      document.getElementById("ID").innerHTML = "";
    }
    else if (this.checked && (document.getElementById("states_add").value == "") == false) {
      console.log(document.getElementById("states_add").value == "");
      changing();
    }
    else if (this.checked && Republicans.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else if (this.checked && Democrats.checked && (document.getElementById("states_add").value == "") == false) {
      changing();
    }
    else {
      document.getElementById("ID").innerHTML = "";
    }
  });

}

else {
  document.getElementById("membersHS").onclick = function (evt) {
    sessionStorage.setItem("chamber", evt.target.innerHTML);
  }
}

export async function fetchJson() {            //Fetching data from JSON
  if (!window.location.search) {               // If windows browser doesn't contain search symbol, then he use the one from last session page
    console.log("Iam in window listener IF");
    chamberSave = sessionStorage.getItem("chamber");
    webChange.click();
  }
  else {
    if (window.location.search == "?chamber=senate") {
      console.log("Ich bin in senate chamber -> " + window.location.search);
      document.getElementsByClassName("hide")[0].style.display = "";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-API-Key": API
        }
      });
      const data = await response.json();
      return data;
    }
    else {
      console.log("Ich bin in house chamber -> " + window.location.search);
      document.getElementsByClassName("hide")[1].style.display = "";
      const response = await fetch(urlHouse, {
        method: "GET",
        headers: {
          "X-API-Key": API
        }
      });
      const data = await response.json();
      return data;
    }
  }
}
// ----------- Facebook accounts and saving data to congressData variable, which i will use many times. -------------
export function makeMemberRows(data) {
  console.log(data.results[0].members.length);
  for (let i = 0; i <= data.results[0].members.length - 1; i++) {
    if (data.results[0].members[i].facebook_account == null) { }
    else {
      console.log('https://www.facebook.com/' + data.results[0].members[i].facebook_account);
      console.log(" " + data.results[0].members[i].party);
    }
  }
  congressData = data;
  filterByParty(data);
  makeStatesMenu();
}
function makeStatesMenu() {
  showStateData().then(data => {
    const keys = Object.keys(data);
    const value = Object.values(data);
    for (let i = 0; i < keys.length; i++) {
      let opt = document.createElement('option');
      opt.value = keys[i];
      opt.innerHTML = value[i];
      addStates.appendChild(opt);
    }
  })
};
function filterByParty(data) {
  for (let i = 0; i <= data.results[0].members.length - 1; i++) {
    if (data.results[0].members[i].party == "D") {
      dataSeparation.democrats.name.push(data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name);
      dataSeparation.democrats.party.push("Democrat");
    } else if (data.results[0].members[i].party == "ID") {
      dataSeparation.independent.name.push(data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name);
      dataSeparation.independent.party.push("Independent");
    } else {
      dataSeparation.republicans.name.push(data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name);
      dataSeparation.republicans.party.push("Republican");
    }
  }

}
// -------------  Creates menu for states.   -------------
async function showStateData() {
  const response = await fetch("./states.json");
  const data = await response.json();
  return data;
}