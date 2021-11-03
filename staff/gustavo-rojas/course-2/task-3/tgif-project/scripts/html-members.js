
const url = './jsons/pro-congress-117-senate.json';
var jsonsenators = [];

function fetchJsonsenators(url) {
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

function getmembersFiltersArray(){
    let dropdown_state_territory = document.getElementById("state-territory");
    members=jsonsenators.results[0].members;
    var republicanselected="";
    var decomocratsselected="";
    var independentsselected="";
    stateselected=dropdown_state_territory.value;
    republicansenators =[];
    democratssenators =[];
    independentsenators=[];
    if(republicanscheckbox.checked) {
        var republicanselected="R"; 
    }
    if(democratscheckbox.checked) {
        var decomocratsselected="D"; 
    }
    if(independentcheckbox.checked) {
        var independentsselected="ID"; 
    }
    stateselected=dropdown_state_territory.value;
    if(stateselected=="all"){
        republicansenators = members.filter(function (currentElement) { return currentElement.party === republicanselected; });
        democratssenators = members.filter(function (currentElement) { return currentElement.party === decomocratsselected; });
        independentsenators = members.filter(function (currentElement) { return currentElement.party === independentsselected; });
        return [].concat(republicansenators, democratssenators ,independentsenators);
    }
    if(stateselected!=="all"){
        republicansenators = members.filter(function (currentElement) { return currentElement.party === republicanselected && currentElement.state === stateselected;});
        democratssenators = members.filter(function (currentElement) {  return currentElement.party === decomocratsselected && currentElement.state === stateselected;});
        independentsenators = members.filter(function (currentElement) {return currentElement.party === independentsselected && currentElement.state === stateselected; });
        return [].concat(republicansenators, democratssenators ,independentsenators);
    } 

}

function makeMemberRowsfilteredarray(arrayfiltered, table_id) {
    for (let i = 0; i <= arrayfiltered.length-1; i++) {
        var statesenator = arrayfiltered[i].state;
        var statelongname = jsonstates[statesenator];
        var fullname = arrayfiltered[i].first_name + " " + arrayfiltered[i].last_name;
        var urlsenators = arrayfiltered[i].url;
        insert_row(table_id, 1, fullname, urlsenators, arrayfiltered[i].party, statelongname, arrayfiltered[i].seniority, arrayfiltered[i].votes_with_party_pct);
    }
}

function removeallrowstable(table_id) {
    var table = document.getElementById(table_id);

    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }

}
/* I did the call in fetch I use a external variable to store the results . The way how I checked if the variable have the data is checking if
the variable is available . The next version of this code must test the use async and await, to await and manage the async call in the fetch and 
wait to the variable values. That was a workaround because the prorepublica have issues with the API calls . */
var jsonstatesfiltered;
function waitForjsonsenators() {
    tableidtodisplay = 'senators-list';
    if (typeof (jsonsenators.results) !== "undefined" && typeof (jsonsenators) !== "undefined") {
        removestatesnosenators();
        waitForjsonstates();

    }
    else {
        setTimeout(waitForjsonsenators, 250);
    }
}

fetchJsonstatefiles(jsonstatefile);
fetchJsonsenators(url);

republicanscheckbox = document.getElementById('republicanscheckbox');
democratscheckbox = document.getElementById('democratscheckbox');
independentcheckbox = document.getElementById('independentcheckbox');
stateterritoresdropdown = document.getElementById('state-territory');


republicanscheckbox.addEventListener('change', e => {
    var table_id = 'senators-list';    
    var arraymemberselected =[];
    if (e.target.checked || !e.target.checked) {
        removeallrowstable(table_id);
        arraymemberselected=getmembersFiltersArray();
        makeMemberRowsfilteredarray(arraymemberselected, table_id)
    }

});


democratscheckbox.addEventListener('change', e => {
    var table_id = 'senators-list';    
    var arraymemberselected =[];
    if (e.target.checked || !e.target.checked) {
        removeallrowstable(table_id);
        arraymemberselected=getmembersFiltersArray();
        makeMemberRowsfilteredarray(arraymemberselected, table_id);
    }
});

independentcheckbox.addEventListener('change', e => {
    var table_id = 'senators-list';    
    var arraymemberselected =[];
     if (e.target.checked || !e.target.checked) {
        removeallrowstable(table_id);
        arraymemberselected=getmembersFiltersArray();
        makeMemberRowsfilteredarray(arraymemberselected, table_id);
    }
    
});

stateterritoresdropdown.addEventListener('change', e => {
    var table_id = 'senators-list';
    removeallrowstable(table_id);
    arraymemberselected=getmembersFiltersArray();
    makeMemberRowsfilteredarray(arraymemberselected, table_id);

})

function waitForjsonstates() {
    if (jsonstates.length !== 0) {
        createdropdownmenu();
    }
    else {
        setTimeout(waitForjsonstates, 250);
    }
}

function removestatesnosenators() {
    var jsonstatesfiltered=jsonstates;
    members=jsonsenators.results[0].members;
    memberbystate=[];
    for (let key in jsonstatesfiltered) {
     memberbystate=members.filter(function (currentElement) { return (currentElement.state === key) });
         if(memberbystate.length===0) { delete jsonstatesfiltered[key]; }
    }

    return jsonstatesfiltered;
    }
    


function createdropdownmenu() {
    let dropdown_state_territory = document.getElementById("state-territory");
    option = document.createElement('option');
    option.text = "All States/territories";
    option.value = "all";
    dropdown_state_territory.add(option);
    for (let key in jsonstates) {
        option = document.createElement('option');
        option.text = jsonstates[key];
        option.value = key;
        dropdown_state_territory.add(option);
    }

}
waitForjsonsenators();
