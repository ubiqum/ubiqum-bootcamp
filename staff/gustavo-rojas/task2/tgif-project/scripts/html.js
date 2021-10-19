let url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
var keyvalue = 'gdT8JyXvej1ZEHgazl8N6EvfRX88z8ik4qymrZ23'

jsonsenators =[]
function fetchJson(url, keyvalue) {
    return fetch(url, { mode: 'cors', headers: {'X-API-Key': keyvalue,'Accept': 'application/json', }, }).then(
(value)=> {
	return value.json()
}
).then(
	(value) => {
		jsonsenators=value
	}
)
        .catch(error => console.log('Error while fetching:', error))
}
function makeMemberRows() {
    member_senate_117 = fetchJson(url, keyvalue);
    insert_row('senators-list',1,"Name","Party","State","Years in Office","Votes with Party");
}
function insert_row (table_id,first_row,name_text,party_text,state_text,yearinoffice_text,pervoteswithparty_text) {
    var x =document.getElementById(table_id).insertRow(first_row);
    var name = x.insertCell(0);
    var party = x.insertCell(1);
    var state = x.insertCell(2);
    var yearinoffice = x.insertCell(3);
    var pervoteswithparty = x.insertCell(4);
    
    name.innerHTML=name_text;
    party.innerHTML=party_text;
    state.innerHTML=state_text;
    yearinoffice.innerHTML=yearinoffice_text;
    pervoteswithparty.innerHTML=pervoteswithparty_text;

}