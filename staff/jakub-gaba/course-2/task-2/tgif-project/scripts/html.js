
var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
var D = [];
var ID = [];
var R = [];



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

export function filterByState(data) {
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

// document.getElementById("myBtn").addEventListener("click", displayDemocrats);


var Republicans = document.querySelector("input[id=republicanscheckbox]");
var Democrats = document.querySelector("input[id=democratscheckbox]");
var Independent = document.querySelector("input[id=independentcheckbox]");



Republicans.addEventListener('change', function () {
  if (this.checked) {
    for (let i = 0; i <= R.length-1; i++) {
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
    for (let i = 0; i <= D.length-1; i++) {
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
    for (let i = 0; i <= ID.length-1; i++) {
    var row = document.getElementById("ID").insertRow();
    var cell = row.insertCell();
    cell.innerHTML = ID[i];
    }
  } else {
    document.getElementById("ID").innerHTML = "";
  }
});


