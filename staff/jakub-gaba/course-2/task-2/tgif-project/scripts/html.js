
var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
var D = [];
var ID = [];
var R = [];
let saveValues;



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

export function makeMemberRows(data) {
  for (let i = 0; i <= data.results[0].members.length - 1; i++) {
    if (data.results[0].members[i].facebook_account == null) { }
    else {
      console.log('https://www.facebook.com/' + data.results[0].members[i].facebook_account);
    }
  }
  filterByParty(data);
  showStateData();
  letsRoll(data);
}

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

export async function showStateData() {
  const response = await fetch("./states.json");
  const data = await response.json();
  return data;
}



// document.getElementById("myBtn").addEventListener("click", displayDemocrats);


var Republicans = document.querySelector("input[id=republicanscheckbox]");
var Democrats = document.querySelector("input[id=democratscheckbox]");
var Independent = document.querySelector("input[id=independentcheckbox]");
var statesData = document.getElementById("states_add");



Republicans.addEventListener('change', function () {
  if (this.checked) {
    for (let i = 0; i <= R.length - 1; i++) {
      var row = document.getElementById("R").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = R[i];
    }
  } else {
    document.getElementById("R").innerHTML = "";
  }
});


Democrats.addEventListener('change', function () {
  if (this.checked) {
    for (let i = 0; i <= D.length - 1; i++) {
      var row = document.getElementById("D").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = D[i];
    }
  } else {
    document.getElementById("D").innerHTML = "";
  }
});


Independent.addEventListener('change', function () {
  if (this.checked) {
    for (let i = 0; i <= ID.length - 1; i++) {
      var row = document.getElementById("ID").insertRow();
      var cell = row.insertCell();
      cell.innerHTML = ID[i];
    }
  } else {
    document.getElementById("ID").innerHTML = "";
  }
});


statesData.addEventListener('change', function () {
  var element = document.getElementById("states_add");
  if (this.checked) {
    for (let i = 0; i <= data.results[0].members.length - 1; i++) {
      if (data.results[0].members[i].state == element.options[element.selectedIndex].value) {
        console.log(data.results[0].members[i].first_name + " " + data.results[0].members[i].state + " " + element.options[element.selectedIndex].value);
        var row = document.getElementById("impostor").insertRow();
        var cell = row.insertCell();
        cell.innerHTML = data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name;;
      }
    }
  }
});

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