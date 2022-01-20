/*--------------------------------VAR TO TELL PAGE WE ARE ON------------------------------------ */
let params = new URL(document.location).searchParams;
let chamber = params.get('chamber');
console.log("chamber: " + chamber);

/*---------------------------------------EVENT LISTENERS--------------------------------------- */
var path = window.location.pathname;
var page = path.split("/").pop().split('.')[0];
console.log("page: " + page);

if (page === "members") {
document.getElementById("democrat").addEventListener("click", function () { filter_party() });
document.getElementById("republican").addEventListener("click", function () { filter_party() });  
document.getElementById("independent").addEventListener("click", function () { filter_party() });
document.getElementById("state_filter").addEventListener("input",  function () { filter_party() });
}

/*--------------------------------DROPDOWN MENU FEATURES------------------------------------ */
// window.addEventListener('click', (event) => {     // Close all dropdown lists if the user clicks outside of it
//   if (!event.target.matches('.dropdown-btn')) {
//     console.log("click outside: " + !event.target.matches('.dropdown-btn'));
//     Array.from(document.querySelectorAll('.dropdown')).forEach((element) => {
//       element.classList.remove('show');
//     })
//   }
// });
// Array.from(document.querySelectorAll('.dropdown-btn')).forEach((btn) => {   // Set all dropdown buttons to open their associated dropdown list on click
//   const dropdown = btn.closest('.dropdown');
//   console.log(dropdown);
//   if (dropdown) {
//     btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     dropdown.classList.toggle('show');
//     })
//   }
// });
/*-----------------------------------HIDING INFORMATION BASED ON PAGE------------------------------------ */
if (page !== "index") {
  var x = document.getElementById(`hide-${chamber}-info`);
  if (x.style.display === "none") {x.style.display = "block"} else {x.style.display = "none"}
}

/*------------------------------------------STATE DICTIONARY--------------------------------------------- */
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

/*------------------------------AUTO-CREATE TABLE TO LIST MEMBERS---------------------------------------- */
function makeMemberRows(members_array){
  document.getElementById(`${chamber}-data`).innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById(`${chamber}-data`);     // We'll put the table inside correspondent div
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

/*--------------------------------AUTO-CREATE "AT-A-GLANCE" TABLE---------------------------------------- */
function makeAttendanceRows(){
  document.getElementById(`${chamber}-at-a-glance`).innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById(`${chamber}-at-a-glance`);     // We'll put the table inside correspondent div
  let thead = document.createElement('thead');            // Variable to create block header
  let tbody = document.createElement("tbody");            // Variable to create body
  /*-------------------------------------------TABLE HEADER---------------------------------------- */
  let tr      = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let col1 = document.createTextNode("Party");
  let col2 = document.createTextNode("Number of Reps");
  let col3 = document.createTextNode("% Votes with Party");

  th1.appendChild(col1);          // Append head text
  th2.appendChild(col2);
  th3.appendChild(col3);
  tr.appendChild(th1);            // Append cell
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);          // Append row to header
  table.appendChild(thead);       // Append head to table

  /*-------------------------------------------INSERT ROWS---------------------------------------- */
  for (let i=0; i < 3; i++) {
    let party = ["Republican", "Democrat", "Independent"];
    let totals = [total_rep, total_dem, total_ind];
    let averages = [avg_votes_rep, avg_votes_dem, avg_votes_ind]

    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let text1 =  document.createTextNode(party[i]);
    let text2 =  document.createTextNode(totals[i]);
    let text3 =  document.createTextNode(averages[i]);

    td1.appendChild(text1);           //Append text
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);            // Append cell
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);          //Append row to body
    table.appendChild(tbody);        //Append body to table
  }
}

/*------------------------------AUTO-CREATE "LEAST-ENGAGED" TABLE---------------------------------------- */
function makeLeastEngagedRows(sorted_array){
  document.getElementById(`${chamber}-least-engaged`).innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById(`${chamber}-least-engaged`);     // We'll put the table inside correspondent div
  let thead = document.createElement('thead');            // Variable to create block header
  let tbody = document.createElement("tbody");            // Variable to create body
  /*-------------------------------------------TABLE HEADER---------------------------------------- */
  let tr      = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let col1 = document.createTextNode("Name");
  let col2 = document.createTextNode("No. Missed Votes");
  let col3 = document.createTextNode("% Missed");

  th1.appendChild(col1);          // Append head text
  th2.appendChild(col2);
  th3.appendChild(col3);
  tr.appendChild(th1);            // Append cell
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);          // Append row to header
  table.appendChild(thead);       // Append head to table

  /*-------------------------------------------INSERT ROWS---------------------------------------- */
  for (var i = 0; i < sorted_array.length; i++) {
    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let text1 =  document.createTextNode(members[i].first_name + " " + (members[i].middle_name || "")  +" "+ members[i].last_name);
    let text2 =  document.createTextNode(members[i].missed_votes);
    let text3 =  document.createTextNode(members[i].missed_votes_pct);

    td1.appendChild(text1);           //Append text
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);            // Append cell
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);          //Append row to body
    table.appendChild(tbody);        //Append body to table
  }
}

/*------------------------------AUTO-CREATE "MOST-ENGAGED" TABLE----------------------------------------- */
function makeMostEngagedRows(sorted_array){
  document.getElementById(`${chamber}-most-engaged`).innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById(`${chamber}-most-engaged`);     // We'll put the table inside correspondent div
  let thead = document.createElement('thead');            // Variable to create block header
  let tbody = document.createElement("tbody");            // Variable to create body
  /*-------------------------------------------TABLE HEADER---------------------------------------- */
  let tr      = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let col1 = document.createTextNode("Name");
  let col2 = document.createTextNode("No. Missed Votes");
  let col3 = document.createTextNode("% Missed");

  th1.appendChild(col1);          // Append head text
  th2.appendChild(col2);
  th3.appendChild(col3);
  tr.appendChild(th1);            // Append cell
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);          // Append row to header
  table.appendChild(thead);       // Append head to table

  /*-------------------------------------------INSERT ROWS---------------------------------------- */
  for (var i = 0; i < sorted_array.length; i++) {
    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let text1 =  document.createTextNode(members[i].first_name + " " + (members[i].middle_name || "")  +" "+ members[i].last_name);
    let text2 =  document.createTextNode(members[i].missed_votes);
    let text3 =  document.createTextNode(members[i].missed_votes_pct);

    td1.appendChild(text1);           //Append text
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);            // Append cell
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);          //Append row to body
    table.appendChild(tbody);        //Append body to table
  }
}

/*-------------------------------AUTO-CREATE "LEAST-LOYAL" TABLE----------------------------------------- */
function makeLeastLoyalRows(sorted_array){
  document.getElementById(`${chamber}-least-loyal`).innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById(`${chamber}-least-loyal`);     // We'll put the table inside correspondent div
  let thead = document.createElement('thead');            // Variable to create block header
  let tbody = document.createElement("tbody");            // Variable to create body
  /*-------------------------------------------TABLE HEADER---------------------------------------- */
  let tr      = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let col1 = document.createTextNode("Name");
  let col2 = document.createTextNode("No. Party Votes");
  let col3 = document.createTextNode("% Party Votes");

  th1.appendChild(col1);          // Append head text
  th2.appendChild(col2);
  th3.appendChild(col3);
  tr.appendChild(th1);            // Append cell
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);          // Append row to header
  table.appendChild(thead);       // Append head to table

  /*-------------------------------------------INSERT ROWS---------------------------------------- */
  for (var i = 0; i < sorted_array.length; i++) {
    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let text1 =  document.createTextNode(members[i].first_name + " " + (members[i].middle_name || "") + " " + members[i].last_name);
    let text2 =  document.createTextNode(members[i].total_votes);
    let text3 =  document.createTextNode(members[i].votes_against_party_pct);

    td1.appendChild(text1);           //Append text
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);            // Append cell
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);          //Append row to body
    table.appendChild(tbody);        //Append body to table
  }
}

/*-------------------------------AUTO-CREATE "MOST-LOYAL" TABLE------------------------------------------ */
function makeMostLoyalRows(sorted_array){
  document.getElementById(`${chamber}-most-loyal`).innerHTML = "";  // Deletes previous data in div
  let table = document.getElementById(`${chamber}-most-loyal`);     // We'll put the table inside correspondent div
  let thead = document.createElement('thead');            // Variable to create block header
  let tbody = document.createElement("tbody");            // Variable to create body
  /*-------------------------------------------TABLE HEADER---------------------------------------- */
  let tr      = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  let col1 = document.createTextNode("Name");
  let col2 = document.createTextNode("No. Party Votes");
  let col3 = document.createTextNode("% Party Votes");

  th1.appendChild(col1);          // Append head text
  th2.appendChild(col2);
  th3.appendChild(col3);
  tr.appendChild(th1);            // Append cell
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);          // Append row to header
  table.appendChild(thead);       // Append head to table

  /*-------------------------------------------INSERT ROWS---------------------------------------- */
  for (var i = 0; i < sorted_array.length; i++) {
    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let text1 =  document.createTextNode(members[i].first_name + " " + (members[i].middle_name || "") + " " + members[i].last_name);
    let text2 =  document.createTextNode(members[i].total_votes);
    let text3 =  document.createTextNode(members[i].votes_with_party_pct);

    td1.appendChild(text1);           //Append text
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);            // Append cell
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);          //Append row to body
    table.appendChild(tbody);        //Append body to table
  }
}

/*-----------------------------------FILL IN "AT-A-GLANCE" TABLE----------------------------------------- */
let total_rep = 0, total_dem = 0, total_ind = 0;
let avg_votes_rep = 0, avg_votes_dem = 0, avg_votes_ind = 0;
function attendanceData(){
  let pct_votes_rep = [], pct_votes_dem = [], pct_votes_ind = [];
  for (var i = 0; i < members.length; i++) {
    var votes = members[i].votes_with_party_pct;
    if (votes !== undefined) {
      if (members[i].party === 'D') {pct_votes_rep.push(votes), total_dem++}; 
      if (members[i].party === 'R') {pct_votes_dem.push(votes), total_rep++}; 
      if (members[i].party === 'ID') {pct_votes_ind.push(votes), total_ind++};
    }
  }
  function sum (array) {return array.reduce((a, b) => a + b, 0)};
  function avg (array) {return (sum(array) / array.length) || 0};
  avg_votes_rep = parseFloat(avg(pct_votes_rep)).toFixed(2);
  avg_votes_dem = parseFloat(avg(pct_votes_dem)).toFixed(2);
  avg_votes_ind = parseFloat(avg(pct_votes_ind)).toFixed(2);

  makeAttendanceRows();
}

/*------------------------------FILL IN BOTH ENGAGEMENT TABLES-------------------------------------- */
function engagement(){
  let ten_percent = parseInt(members.length / 10);
  const engaged_sorted = members.sort(function(a,b) { return a.missed_votes < b.missed_votes ? 1 : -1});
  makeLeastEngagedRows(engaged_sorted.splice(1, ten_percent));
  makeMostEngagedRows(engaged_sorted.reverse().splice(1, ten_percent));
}

/*------------------------------FILL IN BOTH LOYALTY TABLES-------------------------------------- */
function loyalty(){
  let ten_percent = parseInt(members.length / 10);
  const loyalty_sorted = members.sort(function(a,b) { return a.votes_with_party_pct < b.votes_with_party_pct ? 1 : -1});
  makeLeastLoyalRows(loyalty_sorted.splice(1, ten_percent));
  makeMostLoyalRows(loyalty_sorted.splice(1, ten_percent));
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

/*---------------------------------------GET DATA AND SHOW IT--------------------------------------- */
//NOTE: All functions must be run inside fetchAsync or else they won't call the json.
let members = [];
async function fetchAsync () {
  if (page !== "index") {
  await fetch(`http://localhost:8000/pro-congress-117-${chamber}.json`)
    .then( (response) => {
      return response.json();         // Saving response into JSON format (because we know)   
      })
    .then( (json)=> {
      members = json.results[0].members // This places itself in the array with all members
      //console.log(members);
      })
     .catch(reason => console.log(reason.message))
     if (page === "members") { filter_party() };
     if (page === "attendance") { attendanceData(), engagement() };
     if (page === "loyalty") { attendanceData(), loyalty() };
    }
}

fetchAsync();