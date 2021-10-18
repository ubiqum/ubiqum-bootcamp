let url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
var keyvalue = 'gdT8JyXvej1ZEHgazl8N6EvfRX88z8ik4qymrZ23'

function fetchJson(url, keyvalue) {
    return fetch(url, {
        mode: 'cors',
        headers: {
            'X-API-Key': keyvalue,
            'Accept': '*/*',
        },
    })
        .then(response => response.json())
        .catch(error => console.log('Error while fetching:', error))
}
function makeMemberRows(obj) {

}