const url = './jsons/pro-congress-117-senate.json';

var jsonsenators = [];

function fetchJsonsenators(url, keyvalue) {
    return fetch(url)
        .then(
            (value) => {
                return value.json()
            }
        ).then(
            (value) => {
                jsonsenators = value
            }
        )
        .catch(error => console.log('Error while fetching:', error))

}
var jsonstates = [];
const jsonstatefile = './jsons/states_hash.json';
function fetchJsonstatefiles(jsonstatefiles) {
    return fetch(jsonstatefiles)
        .then(
            (value) => {
                return value.json()
            })
        .then(
            (value) => {
                jsonstates = value
            }
        )
        .catch(error => console.log('Error while fetching:', error))
}

function insert_row(table_id, first_row, name_text, urlsenators, party_text, state_text, yearinoffice_text, pervoteswithparty_text) {
    var x = document.getElementById(table_id).insertRow(first_row);
    var name = x.insertCell(0);
    var party = x.insertCell(1);
    var state = x.insertCell(2);
    var yearinoffice = x.insertCell(3);
    var pervoteswithparty = x.insertCell(4);
    name.innerHTML = name_text.link(urlsenators);
    party.innerHTML = party_text;
    state.innerHTML = state_text;
    yearinoffice.innerHTML = yearinoffice_text;
    pervoteswithparty.innerHTML = pervoteswithparty_text;

}
function makeMemberRows(jsonsenators, rowstodisplay, table_id) {
    for (let i = 0; i <= rowstodisplay; i++) {
        var statesenator = jsonsenators.results[0].members[i].state;
        var statelongname = jsonstates[statesenator];
        var fullname = jsonsenators.results[0].members[i].first_name + " " + jsonsenators.results[0].members[i].last_name;
        var urlsenators = jsonsenators.results[0].members[i].url;
        insert_row(table_id, 1, fullname, urlsenators, jsonsenators.results[0].members[i].party, statelongname, jsonsenators.results[0].members[i].seniority, jsonsenators.results[0].members[i].votes_with_party_pct);
    }
}
function makerowswitharray(arrayfiltered, rowstodisplay, table_id) {
    for (let i = 0; i <= rowstodisplay; i++) {
        var statesenator = arrayfiltered[i].state;
        var statelongname = jsonstates[statesenator];
        var fullname = arrayfiltered[i].first_name + " " + arrayfiltered[i].last_name;
        var urlsenators = jsonsenators.results[0].members[i].url;
        insert_row(table_id, 1, fullname, urlsenators, arrayfiltered[i].party, statelongname, arrayfiltered[i].seniority, arrayfiltered[i].votes_with_party_pct);
    }

}

function waitForjsonsenators() {
    tableidtodisplay = 'senators-list';
    if (typeof (jsonsenators.results) !== "undefined" && typeof (jsonsenators) !== "undefined") {
        makeMemberRows(jsonsenators, jsonsenators.results[0].members.length - 1, tableidtodisplay);

    }
    else {
        setTimeout(waitForjsonsenators, 250);
    }
}



fetchJsonstatefiles(jsonstatefile);
fetchJsonsenators(url);
waitForjsonsenators();

function hidenbycellvalue(table_id, numbercell, value) {
    mytable = document.getElementById(table_id);
    for (let i = 0; i <= mytable.rows.length-1; i++) {
        if (mytable.rows[i].cells[numbercell].innerHTML == value) {
            mytable.rows[i].hidden = true;
        }
    }
}

function showbycellvalue(table_id, numbercell, value) {
    mytable = document.getElementById(table_id);
    for (let i = 0; i <= mytable.rows.length-1; i++) {
        if (mytable.rows[i].cells[numbercell].innerHTML == value) {
            mytable.rows[i].hidden = false;
        }
    }
}


republicanscheckbox = document.getElementById('republicanscheckbox');
democratscheckbox = document.getElementById('democratscheckbox');
independentcheckbox = document.getElementById('independentcheckbox');
republicanscheckbox.addEventListener('change', e => {
    if(e.target.checked){
        showrepublicans();
    }
    else {
      if (!democratscheckbox.checked && !republicanscheckbox.checked && !independentcheckbox.checked  ) {
        showallrows();
      }
      if(democratscheckbox.checked) {
        showdemocrats();
      }
      if(independentcheckbox.checked){
        showindependent();
      }
        
    }
});


democratscheckbox.addEventListener('change', e => {
    if(e.target.checked){
        showdemocrats();
    }
    else {
        if (!democratscheckbox.checked && !republicanscheckbox.checked && !independentcheckbox.checked  ) {
            showallrows();
          }
        if (republicanscheckbox.checked){
            showrepublicans();
        }
        if(independentcheckbox.checked){
            showindependent();

        }
    }
});

independentcheckbox.addEventListener('change', e => {
    if(e.target.checked){
        showindependent();
    }
    else {
        if (!democratscheckbox.checked && !republicanscheckbox.checked && !independentcheckbox.checked  ) {
        showallrows();
      }
      if (republicanscheckbox.checked){
        showrepublicans();
    }
    if(democratscheckbox.checked) {
        showdemocrats();
      }
      
    }
});

function showrepublicans() {
    var table_id='senators-list';
    var numbercell = 1;
    var republicans= "R";
    showbycellvalue(table_id, numbercell, republicans);
    if (!democratscheckbox.checked) {
        var democrats="D"
        hidenbycellvalue(table_id, numbercell, democrats);
    }
    if(!independentcheckbox.checked) {
        var independent="ID";
        hidenbycellvalue(table_id, numbercell, independent);

    }
}

function showdemocrats() {
    var table_id='senators-list';
    var numbercell = 1;
    var democrats= "D";
    showbycellvalue(table_id, numbercell, democrats);
    if (!republicanscheckbox.checked) {
        var republicans="R"
        hidenbycellvalue(table_id, numbercell, republicans);
    }
    if(!independentcheckbox.checked) {
        var independent="ID";
        hidenbycellvalue(table_id, numbercell, independent);

    }
}

function showindependent() {
    var table_id='senators-list';
    var numbercell = 1;
    var independent= "ID";
    showbycellvalue(table_id, numbercell, independent);
    if (!republicanscheckbox.checked) {
        var republicans="R"
        hidenbycellvalue(table_id, numbercell, republicans);
    }
    if(!democratscheckbox.checked) {
        var democrats="D";
        hidenbycellvalue(table_id, numbercell, democrats);

    }
}

function showbystate(statename,jsonstates) {
    var table_id='senators-list';
    var numbercell = 2;
    showbycellvalue(table_id, numbercell,statename);
    for (let key in jsonstates) {
        if(jsonstates[key]!==statename) {
            hidenbycellvalue(table_id, numbercell,jsonstates[key]);
        }
      }
}


function showallrows() {
    var table_id='senators-list';
    var numbercell = 1;
    var republicans= "R";
    showbycellvalue(table_id, numbercell, republicans);
    var democrats= "D";
    showbycellvalue(table_id, numbercell, democrats);
    var independent= "ID";
    showbycellvalue(table_id, numbercell, independent);
}


function createdropdownmenu() {
    dropdown = document.getElementById("state-territory");
    option= document.createElement('option');
    option.text = "All States/territories";
    option.value = "All States/territories";
    dropdown.add(option);
    console.log(jsonstates);
    for (var key in jsonstates) {
        option = document.createElement('option');
        option.text = jsonstates[key];
        option.value = jsonstates[key];
        dropdown.add(option);
      }
    
}

function waitForjsonstates() {
    if (jsonstates.length!==0) {
        createdropdownmenu();
    }
    else {
        setTimeout(waitForjsonstates, 250);
    }
}

/*
if(typeof(jsonstates) == "undefined") {
    console.log("jsonstates is undefined")
} 

if(typeof(jsonstates) !== "undefined") {
    console.log("jsonstates is defined")
}*/

waitForjsonstates()