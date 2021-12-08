
const states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}

/*---------------------------------------AUTO-CREATE TABLE---------------------------------------- */
function makeMemberRows(members_array){
  document.getElementById("senate-data").innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById("senate-data");     // We'll put the table inside div "senate-data"
  let thead = document.createElement('thead');            // Variable to create block header
  let tbody = document.createElement("tbody");            // Variable to create body
  /*-------------------------------------------TABLE HEADER---------------------------------------- */
  let tr      = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let th4 = document.createElement('th');
  let th5 = document.createElement('th');
  let col1 = document.createTextNode("Full name");
  let col2 = document.createTextNode("Party");
  let col3 = document.createTextNode("State");
  let col4 = document.createTextNode("Years in Office");
  let col5 = document.createTextNode("% Votes with Party");

  th1.appendChild(col1);          // Append head text
  th2.appendChild(col2);
  th3.appendChild(col3);
  th4.appendChild(col4);
  th5.appendChild(col5);
  tr.appendChild(th1);            // Append cell
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  thead.appendChild(tr);          // Append row to header
  table.appendChild(thead);       // Append head to table

  /*-------------------------------------------INSERT ROWS---------------------------------------- */
  for (let i=0; i < members_array.length; i++) {
    let link1 = document.createElement("a");    //"href=a"
    link1.setAttribute("href", members_array[i].url);
    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let td4 =  document.createElement('td');
    let td5 =  document.createElement('td');
    let linktext1 =  document.createTextNode(members_array[i].first_name + " " + (members_array[i].middle_name || "")  +" "+ members_array[i].last_name);
    let text2 =  document.createTextNode(members_array[i].party);
    let text3 =  document.createTextNode(members_array[i].state);
    let text4 =  document.createTextNode(members_array[i].seniority);
    let text5 =  document.createTextNode(members_array[i].votes_with_party_pct);

    link1.appendChild(linktext1);
    td1.appendChild(link1);           //Append text
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    tr.appendChild(td1);            // Append cell
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);          //Append row to body
    table.appendChild(tbody);        //Append body to table
       }
}

/*-------------------------------------FILTER CREATED TABLE---------------------------------------- */
function filter_party(){
  let selected_members = []

  for (var i = 0; i < members.length; i++) {
    let selectedState = document.getElementById("state_filter").value;

    if (
      (document.getElementById("democrat").checked && members[i].party === 'D') && 
      (selectedState === members[i].state || selectedState === "All")
      ) { selected_members.push(members[i]);
    } 
    if (
      (document.getElementById("republican").checked && members[i].party === 'R') &&
      (selectedState === members[i].state || selectedState === "All")
      ) { selected_members.push(members[i]);
    } 
    if (
      (document.getElementById("independent").checked && members[i].party === 'ID') &&
      (selectedState === members[i].state || selectedState === "All")
      ){ selected_members.push(members[i]);
      } 
    if (( 
      !(document.getElementById("democrat").checked) &&         // NOT operator (!) negates boolean of "checked"
      !(document.getElementById("republican").checked) && 
      !(document.getElementById("independent").checked) &&
      (selectedState === members[i].state || selectedState === "All"))
      ){ selected_members.push(members[i]);
    }
  }     
  makeMemberRows(selected_members);
}

/*--------------------------------GET DATA AND SHOW FILTERED TABLE---------------------------------- */
let members = [];
async function fetchAsync () {
  await fetch("http://localhost:8000/pro-congress-117-senate.json")
    .then( (response) => {
      return response.json();         // Saving response into JSON format (because we know)   
      })
    .then( (json)=> {
      members = json.results[0].members // This places itself in the array with all members
      console.log(members)
      })
     .catch(reason => console.log(reason.message))
     filter_party();
}

fetchAsync()

