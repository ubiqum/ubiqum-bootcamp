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

fetchJsonstatefiles(jsonstatefile);
fetchJsonsenators(url);
waitForjsonsenators();
