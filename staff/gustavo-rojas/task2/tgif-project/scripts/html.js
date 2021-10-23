const url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
const keyvalue = 'gdT8JyXvej1ZEHgazl8N6EvfRX88z8ik4qymrZ23';

var jsonsenators = [];
function fetchJsonsenators(url, keyvalue) {
    return fetch(url, { 
            mode: 'cors', 
            headers: { 
            'X-API-Key': keyvalue, 
            'Accept': 'application/json',
        } 
                })
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
var jsonstates =[];
const jsonstatefile='./jsons/states_hash.json';
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

function insert_row(table_id, first_row, name_text,urlsenators, party_text, state_text, yearinoffice_text, pervoteswithparty_text) {
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
function makeMemberRows(jsonsenators) {
    for (let i = 0; i <= 49;i++) {
        var statesenator = jsonsenators.results[0].members[i].state;     
        var statelongname = jsonstates[statesenator];
        var fullname =jsonsenators.results[0].members[i].first_name + " " + jsonsenators.results[0].members[i].last_name;
        var urlsenators=jsonsenators.results[0].members[i].url;
    insert_row('senators-list', 1, fullname ,urlsenators, jsonsenators.results[0].members[i].party, statelongname, jsonsenators.results[0].members[i].seniority, jsonsenators.results[0].members[i].votes_with_party_pct);
      }
}
function waitForjsonsenators(){
    if(typeof(jsonsenators.results) !== "undefined" && typeof(jsonsenators) !== "undefined" ){
        makeMemberRows(makeMemberRows(jsonsenators))
    }
    else{
        setTimeout(waitForjsonsenators, 250);
    }
}
fetchJsonstatefiles(jsonstatefile);
fetchJsonsenators(url, keyvalue);
waitForjsonsenators();