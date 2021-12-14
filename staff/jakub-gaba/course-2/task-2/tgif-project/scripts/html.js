var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
var D = [];
var ID = [];
var R = [];
let saveValues;
var Republicans = document.querySelector("input[id=republicanscheckbox]");
var Democrats = document.querySelector("input[id=democratscheckbox]");
var Independent = document.querySelector("input[id=independentcheckbox]");
var statesData = document.getElementById("states_add");


//Fetching data from congress ( JSON )
export async function fetchJson() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-Key": API
    }
  });
  const data = await response.json();
  return data;
}

//Shows facebook accounts of each person
export function makeMemberRows(data) {
  for (let i = 0; i <= data.results[0].members.length - 1; i++) {
    if (data.results[0].members[i].facebook_account == null) { }
    else {
      console.log('https://www.facebook.com/' + data.results[0].members[i].facebook_account);
    }
  }
  filterByParty(data);
  saveValues = data;
  showStateData();

}

//Filter to save and separate Democrats, Indepentens, Republicans
export function filterByParty(data) {
  for (let i = 0; i <= data.results[0].members.length - 1; i++) {
    if (data.results[0].members[i].party == "D") {
      D.push(data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name);

    } else if (data.results[0].members[i].party == "ID") {
      ID.push(data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name);

    } else {
      R.push(data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name);
    }
  }

}

//Fetching states from ( JSON )
export async function showStateData() {
  const response = await fetch("./states.json");
  const data = await response.json();
  return data;
}

//Listener for listening between Republicans
Republicans.addEventListener('change', function () {
  document.getElementById("filter").innerHTML = "";
  var element = document.getElementById("states_add");
  if (element.options[element.selectedIndex].value == 0) {
    for (let i = 0; i <= R.length - 1; i++) {
      var row = document.getElementById("R").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = R[i];
    }
  }
  else {
    for (let i = 0; i <= saveValues.results[0].members.length - 1; i++) {
      if (saveValues.results[0].members[i].state == element.options[element.selectedIndex].value &&
        saveValues.results[0].members[i].party == "R") {
        var row = document.getElementById("R").insertRow();
        var cell = row.insertCell();
        cell.innerHTML = saveValues.results[0].members[i].first_name + " " + saveValues.results[0].members[i].last_name + " R ";
      }
    }
  }
  if (!Republicans.checked) {
    document.getElementById("R").innerHTML = "";
  }
});

//Listener for listening between Democrats
Democrats.addEventListener('change', function () {
  document.getElementById("filter").innerHTML = "";
  var element = document.getElementById("states_add");
  if (element.options[element.selectedIndex].value == 0) {
    for (let i = 0; i <= D.length - 1; i++) {
      var row = document.getElementById("D").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = D[i];
    }
  }
  else {
    for (let i = 0; i <= saveValues.results[0].members.length - 1; i++) {
      if (saveValues.results[0].members[i].state == element.options[element.selectedIndex].value && saveValues.results[0].members[i].party == "D") {
        var row = document.getElementById("D").insertRow();
        var cell = row.insertCell();
        cell.innerHTML = saveValues.results[0].members[i].first_name + " " + saveValues.results[0].members[i].last_name + " D ";
      }
    }
  }
  if (!Democrats.checked) {
    document.getElementById("D").innerHTML = "";
  }
});

//Listener for listening between Independets
Independent.addEventListener('change', function () {
  document.getElementById("filter").innerHTML = "";
  var element = document.getElementById("states_add");
  if (element.options[element.selectedIndex].value == 0) {
    for (let i = 0; i <= ID.length - 1; i++) {
      var row = document.getElementById("ID").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = ID[i];
    }
  }
  else {
    for (let i = 0; i <= saveValues.results[0].members.length - 1; i++) {
      if (saveValues.results[0].members[i].state == element.options[element.selectedIndex].value && saveValues.results[0].members[i].party == "ID") {
        var row = document.getElementById("ID").insertRow();
        var cell = row.insertCell();
        cell.innerHTML = saveValues.results[0].members[i].first_name + " " + saveValues.results[0].members[i].last_name + " ID ";
      }
    }
  }
  if (!Independent.checked) {
    document.getElementById("ID").innerHTML = "";
  }
});


//Listener for picking states
statesData.addEventListener('change', function () {
  document.getElementById("filter").innerHTML = "";
  var element = document.getElementById("states_add");
  var actualValue = element.options[element.selectedIndex].value;
  console.log(actualValue);
  if (!(Republicans.checked) && !(Democrats.checked) && !(Independent.checked)) {
  }
  else {
    let names = [];
    console.log(document.getElementsByTagName("td").length);
    for (let i = 0; i <= document.getElementsByTagName("td").length - 1; i++) {
      for (let j = 0; j <= saveValues.results[0].members.length - 1; j++) {
        if (document.getElementsByTagName("td")[i].innerHTML == saveValues.results[0].members[j].first_name + " " + saveValues.results[0].members[j].last_name &&
          actualValue == saveValues.results[0].members[j].state) {
          names.push(saveValues.results[0].members[j].first_name + " " + saveValues.results[0].members[j].last_name);
        }
      }
    }
    document.getElementById("R").innerHTML = "";
    document.getElementById("D").innerHTML = "";
    document.getElementById("ID").innerHTML = "";
    for (let i = 0; i <= names.length - 1; i++) {
      var row = document.getElementById("filter").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = names[i];
    }
    Republicans.checked = false;
    Democrats.checked = false;
    Independent.checked = false;
    console.log(document.getElementsByTagName("td").length);
  }
});


//Create and fill with states
export function makeStatesMenu() {
  showStateData().then(data => {
    const saving = data;
    const keys = Object.keys(saving);
    const value = Object.values(saving);
    for (let i = 0; i < keys.length; i++) {
      let opt = document.createElement('option');
      opt.value = keys[i];
      opt.innerHTML = value[i];
      opt.label = value[i];
      statesData.appendChild(opt);
    }
  });
}