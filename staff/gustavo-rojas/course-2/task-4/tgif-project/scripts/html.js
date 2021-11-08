var actualpage = location.pathname.split('/')[2];

function setactivepage() {
    homepageobject = document.getElementById("homepage");
    navbarobject = document.getElementById("navbarDropdown");
    navbarobjectatt = document.getElementById("navbarDropdownAttendance");
    navbarobjectloyal = document.getElementById("navbarDropdownLoyayly");
    switch (actualpage) {
        case 'index.html':
            homepageobject.classList.add("active");
            break;
        case 'members.html':
            navbarobject.classList.add("active");
            break;
        case 'attendance.html':
            navbarobjectatt.classList.add("active");
            break;
        case 'loyalty.html':
            navbarobjectloyal.classList.add("active");
            break;
        default:
            homepageobject.classList.add("active");
            break;

    }
}

if (actualpage === 'members.html') {
    var params = (new URL(document.location)).searchParams;
    var chamber_params = params.get('chamber');
    republicanscheckbox = document.getElementById('republicanscheckbox');
    democratscheckbox = document.getElementById('democratscheckbox');
    independentcheckbox = document.getElementById('independentcheckbox');
    stateterritoresdropdown = document.getElementById('state-territory');



    switch (chamber_params) {
        case 'senate':
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
            break;
        case 'house':
            var url = './jsons/pro-congress-117-house.json';
            var chamber = 'house'
            break;
        case null:
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
            break;
        default:
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
    }


    function showproperintroduction(actualchamber) {
        var senators_text = document.getElementById("introduction_senators");
        var house_text = document.getElementById("introduction_house");
        switch (actualchamber) {
            case 'senate':
                house_text.hidden = true;
                break;
            case 'house':
                senators_text.hidden = true;
                break;
            default:
                house_text.hidden = true;
        }

    }


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

    function getmembersFiltersArray() {
        let dropdown_state_territory = document.getElementById("state-territory");
        members = jsonsenators.results[0].members;
        var republicanselected = "";
        var decomocratsselected = "";
        var independentsselected = "";
        stateselected = dropdown_state_territory.value;
        republicansenators = [];
        democratssenators = [];
        independentsenators = [];
        if (republicanscheckbox.checked) {
            var republicanselected = "R";
        }
        if (democratscheckbox.checked) {
            var decomocratsselected = "D";
        }
        if (independentcheckbox.checked) {
            var independentsselected = "ID";
        }
        stateselected = dropdown_state_territory.value;
        if (stateselected == "all") {
            republicansenators = members.filter(function (currentElement) { return currentElement.party === republicanselected; });
            democratssenators = members.filter(function (currentElement) { return currentElement.party === decomocratsselected; });
            independentsenators = members.filter(function (currentElement) { return currentElement.party === independentsselected; });
            return [].concat(republicansenators, democratssenators, independentsenators);
        }
        if (stateselected !== "all") {
            republicansenators = members.filter(function (currentElement) { return currentElement.party === republicanselected && currentElement.state === stateselected; });
            democratssenators = members.filter(function (currentElement) { return currentElement.party === decomocratsselected && currentElement.state === stateselected; });
            independentsenators = members.filter(function (currentElement) { return currentElement.party === independentsselected && currentElement.state === stateselected; });
            return [].concat(republicansenators, democratssenators, independentsenators);
        }

    }

    function makeMemberRowsfilteredarray(arrayfiltered, table_id) {
        for (let i = 0; i <= arrayfiltered.length - 1; i++) {
            var statesenator = arrayfiltered[i].state;
            var statelongname = jsonstates[statesenator];
            var fullname = arrayfiltered[i].first_name + " " + arrayfiltered[i].last_name;
            var urlsenators = arrayfiltered[i].url;
            if (typeof arrayfiltered[i].votes_with_party_pct === "undefined") { votes_with_party_pct = "N/A" }
            else { votes_with_party_pct = arrayfiltered[i].votes_with_party_pct };
            insert_row(table_id, 1, fullname, urlsenators, arrayfiltered[i].party, statelongname, arrayfiltered[i].seniority, votes_with_party_pct);
        }
    }

    function removeallrowstable(table_id) {
        var table = document.getElementById(table_id);

        for (var i = table.rows.length - 1; i > 0; i--) {
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

    republicanscheckbox.addEventListener('change', e => {
        var table_id = 'senators-list';
        var arraymemberselected = [];
        if (e.target.checked || !e.target.checked) {
            removeallrowstable(table_id);
            arraymemberselected = getmembersFiltersArray();
            makeMemberRowsfilteredarray(arraymemberselected, table_id)
        }

    });


    democratscheckbox.addEventListener('change', e => {
        var table_id = 'senators-list';
        var arraymemberselected = [];
        if (e.target.checked || !e.target.checked) {
            removeallrowstable(table_id);
            arraymemberselected = getmembersFiltersArray();
            makeMemberRowsfilteredarray(arraymemberselected, table_id);
        }
    });

    independentcheckbox.addEventListener('change', e => {
        var table_id = 'senators-list';
        var arraymemberselected = [];
        if (e.target.checked || !e.target.checked) {
            removeallrowstable(table_id);
            arraymemberselected = getmembersFiltersArray();
            makeMemberRowsfilteredarray(arraymemberselected, table_id);
        }

    });

    stateterritoresdropdown.addEventListener('change', e => {
        var table_id = 'senators-list';
        removeallrowstable(table_id);
        arraymemberselected = getmembersFiltersArray();
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
        var jsonstatesfiltered = jsonstates;
        members = jsonsenators.results[0].members;
        memberbystate = [];
        for (let key in jsonstatesfiltered) {
            memberbystate = members.filter(function (currentElement) { return (currentElement.state === key) });
            if (memberbystate.length === 0) { delete jsonstatesfiltered[key]; }
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

    showproperintroduction(chamber);
    fetchJsonstatefiles(jsonstatefile);
    fetchJsonsenators(url);
    waitForjsonsenators();
}


if (actualpage === 'attendance.html') {
    var params = (new URL(document.location)).searchParams;
    var chamber_params = params.get('chamber');
    var actualchamber = chamber_params;
    function showproperintroduction(actualchamber) {
        var senators_text = document.getElementById("attendance_senators");
        var house_text = document.getElementById("attendance_house");
        switch (actualchamber) {
            case 'senate':
                house_text.hidden = true;
                break;
            case 'house':
                senators_text.hidden = true;
                break;
            default:
                house_text.hidden = true;
        }

    }


    switch (chamber_params) {
        case 'senate':
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
            break;
        case 'house':
            var url = './jsons/pro-congress-117-house.json';
            var chamber = 'house'
            break;
        case null:
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
            break;
        default:
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
    }

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




    function atglancestats() {
        members = jsonsenators.results[0].members;
        const republicanssymbol = 'R';
        var republicans = members.filter(x => x.party === republicanssymbol);
        const democratsssymbol = 'D';
        var democrats = members.filter(x => x.party === democratsssymbol);
        const independentsymbol = 'ID';
        var independent = members.filter(x => x.party === independentsymbol);
        republicanswithvote = republicans.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
        democratswithvote = democrats.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
        independentwithvote = independent.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
        rep_avg_votes_with_party_pct = republicanswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / republicanswithvote.length;
        dem_avg_votes_with_party_pct = democratswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / democratswithvote.length;
        ind_avg_votes_with_party_pct = independentwithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / independentwithvote.length;

        var atglancestatsarray = [];
        var array_total = ["Total", members.length, (rep_avg_votes_with_party_pct + dem_avg_votes_with_party_pct + ind_avg_votes_with_party_pct) / 3];
        atglancestatsarray.push(array_total);
        var array_row3 = ["Independent", independent.length, ind_avg_votes_with_party_pct];
        atglancestatsarray.push(array_row3);
        var array_row2 = ["Democrats", democrats.length, dem_avg_votes_with_party_pct];
        atglancestatsarray.push(array_row2);
        var array_row1 = ["Republicans", republicans.length, rep_avg_votes_with_party_pct];
        atglancestatsarray.push(array_row1);
        return atglancestatsarray;
    }
    function leastengaged_stats(percent) {
        members = jsonsenators.results[0].members;
        n_rows = (members.length * (percent / 100)).toFixed();
        var reversed_members_missed_votes_pct = members.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
        reversed_members_missed_votes_pct_sliced = reversed_members_missed_votes_pct.slice(0, n_rows);
        stats_reversed_members = [];
        reversed_members_missed_votes_pct_sliced.forEach(element => {
            array_temp = [];
            var complete_name = element.first_name + " " + element.last_name;
            array_temp = [complete_name, element.missed_votes, element.missed_votes_pct];
            stats_reversed_members.unshift(array_temp);
        });
        return stats_reversed_members;
    }

    function mostengaded_stats(percent) {
        members = jsonsenators.results[0].members;
        n_rows = (members.length * (percent / 100)).toFixed();
        var sorted_members_missed_votes_pct = members.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
        sorted_members_missed_votes_pct_sliced = sorted_members_missed_votes_pct.slice(0, n_rows);
        stats_sorted_members = [];
        sorted_members_missed_votes_pct_sliced.forEach(element => {
            array_temp = [];
            var complete_name = element.first_name + " " + element.last_name;
            array_temp = [complete_name, element.missed_votes, element.missed_votes_pct];
            stats_sorted_members.unshift(array_temp);
        });
        return stats_sorted_members;
    }


    function maketablerows(array, table_id) {
        for (let i = 0; i <= array.length - 1; i++) {
            insert_row(table_id, 1, array[i][0], array[i][1], array[i][2]);
        }
    }

    function insert_row(table_id, first_row, col_01, col_02, col_03) {
        var x = document.getElementById(table_id).insertRow(first_row);
        var col_01_temp = x.insertCell(0);
        var col_02_temp = x.insertCell(1);
        var col_03_temp = x.insertCell(2);
        col_01_temp.innerHTML = col_01;
        col_02_temp.innerHTML = col_02;
        col_03_temp.innerHTML = col_03.toFixed(2);

    }

    function removeallrowstable(table_id) {
        var table = document.getElementById(table_id);

        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }

    }
    function waitForjsonsenators() {
        tableatglance_id = 'atglance_table';
        tablemostengaged_id = 'most-engaged-table';
        tableleastengaded_id = 'least-engaged-table';
        percentage = 10;
        if (typeof (jsonsenators.results) !== "undefined" && typeof (jsonsenators) !== "undefined") {
            stats_atglance = atglancestats();
            maketablerows(stats_atglance, tableatglance_id);
            stats_mostengaded = mostengaded_stats(percentage);
            maketablerows(stats_mostengaded, tablemostengaged_id);
            stats_leastengaded = leastengaged_stats(percentage);
            maketablerows(stats_leastengaded, tableleastengaded_id);
        }
        else {
            setTimeout(waitForjsonsenators, 250);
        }
    }

    table_id = 'atglance_table';
    removeallrowstable(table_id)
    showproperintroduction(actualchamber);
    fetchJsonsenators(url);
    waitForjsonsenators();
}

if (actualpage === 'loyalty.html') {
    var params = (new URL(document.location)).searchParams;
    var chamber_params = params.get('chamber');
    var actualchamber = chamber_params;
    function showproperintroduction(actualchamber) {
        var senators_text = document.getElementById("loyalty_senators");
        var house_text = document.getElementById("loyalty_house");
        switch (actualchamber) {
            case 'senate':
                house_text.hidden = true;
                break;
            case 'house':
                senators_text.hidden = true;
                break;
            default:
                house_text.hidden = true;
        }

    }

    switch (chamber_params) {
        case 'senate':
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
            break;
        case 'house':
            var url = './jsons/pro-congress-117-house.json';
            var chamber = 'house'
            break;
        case null:
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
            break;
        default:
            var url = './jsons/pro-congress-117-senate.json';
            var chamber = 'senate'
    }

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
    function maketablerows(array, table_id) {
        for (let i = 0; i <= array.length - 1; i++) {
            insert_row(table_id, 1, array[i][0], array[i][1], array[i][2]);
        }
    }

    function insert_row(table_id, first_row, col_01, col_02, col_03) {
        var x = document.getElementById(table_id).insertRow(first_row);
        var col_01_temp = x.insertCell(0);
        var col_02_temp = x.insertCell(1);
        var col_03_temp = x.insertCell(2);
        col_01_temp.innerHTML = col_01;
        col_02_temp.innerHTML = col_02;
        col_03_temp.innerHTML = col_03.toFixed(2);

    }

    function removeallrowstable(table_id) {
        var table = document.getElementById(table_id);

        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }

    }
    function atglancestats() {
        members = jsonsenators.results[0].members;
        const republicanssymbol = 'R';
        var republicans = members.filter(x => x.party === republicanssymbol);
        const democratsssymbol = 'D';
        var democrats = members.filter(x => x.party === democratsssymbol);
        const independentsymbol = 'ID';
        var independent = members.filter(x => x.party === independentsymbol);
        republicanswithvote = republicans.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
        democratswithvote = democrats.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
        independentwithvote = independent.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
        rep_avg_votes_with_party_pct = republicanswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / republicanswithvote.length;
        dem_avg_votes_with_party_pct = democratswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / democratswithvote.length;
        ind_avg_votes_with_party_pct = independentwithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / independentwithvote.length;

        var atglancestatsarray = [];
        var array_total = ["Total", members.length, (rep_avg_votes_with_party_pct + dem_avg_votes_with_party_pct + ind_avg_votes_with_party_pct) / 3];
        atglancestatsarray.push(array_total);
        var array_row3 = ["Independent", independent.length, ind_avg_votes_with_party_pct];
        atglancestatsarray.push(array_row3);
        var array_row2 = ["Democrats", democrats.length, dem_avg_votes_with_party_pct];
        atglancestatsarray.push(array_row2);
        var array_row1 = ["Republicans", republicans.length, rep_avg_votes_with_party_pct];
        atglancestatsarray.push(array_row1);
        return atglancestatsarray;
    }


    function leastloyal_stats(percent) {
        members = jsonsenators.results[0].members;
        n_rows = (members.length * (percent / 100)).toFixed();
        var reversed_least_loyal_members = members.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
        reversed_least_loyal_members_sliced = reversed_least_loyal_members.slice(0, n_rows);
        stats_least_loyal_members = [];
        reversed_least_loyal_members_sliced.forEach(element => {
            array_temp = [];
            var complete_name = element.first_name + " " + element.last_name;
            num_party_votes=((element.votes_with_party_pct/100)*element.total_votes).toFixed(0);
            array_temp = [complete_name, num_party_votes, element.votes_with_party_pct];
            stats_least_loyal_members.unshift(array_temp);
        });
        return stats_least_loyal_members;
    }
    function mostloyal_stats(percent) {
        members = jsonsenators.results[0].members;
        n_rows = (members.length * (percent / 100)).toFixed();
        var sort_most_loyal_members = members.sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct);
        sort_most_loyal_members_sliced = sort_most_loyal_members.slice(0, n_rows);
        stats_most_loyal_members = [];
        sort_most_loyal_members_sliced.forEach(element => {
            array_temp = [];
            var complete_name = element.first_name + " " + element.last_name;
            num_party_votes=((element.votes_with_party_pct/100)*element.total_votes).toFixed(0);
            array_temp = [complete_name, num_party_votes, element.votes_with_party_pct];
            stats_most_loyal_members.unshift(array_temp);
        });
        return stats_most_loyal_members;
    }
    
    function waitForjsonsenators() {
        tableatglance_id = 'atglance_table';
         table_leastloyal_id='least-loyal-table';
         table_mostloyal_id='most-loyal-table';
        percentage = 10;
        if (typeof (jsonsenators.results) !== "undefined" && typeof (jsonsenators) !== "undefined") {
            stats_atglance = atglancestats();
            maketablerows(stats_atglance, tableatglance_id);
            stats_leastloyal=leastloyal_stats(percentage);
            maketablerows(stats_leastloyal,table_leastloyal_id);
            stats_mostloyal=mostloyal_stats(percentage);
            maketablerows(stats_mostloyal,table_mostloyal_id);
        }
        else {
            setTimeout(waitForjsonsenators, 250);
        }
    }

    table_id = 'atglance_table';
    removeallrowstable(table_id)
    showproperintroduction(actualchamber);
    fetchJsonsenators(url);
    waitForjsonsenators();

}

setactivepage();

