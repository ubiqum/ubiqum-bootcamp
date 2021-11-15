const fetchJson = (url, init) => (
  fetch(url, init).then((response) => {
    if (response.ok) {
      return response.json(); 
    }
    throw new Error(response.statusText);
  })
);
function getaveragearray (arrayoftotals) {
  var only_numbers = arrayoftotals.filter(function (item) {
      return (!isNaN(item));
    });
  if(only_numbers.length===0) {
      return 'N/A'
  };
  average_number=only_numbers.reduce((a, b) => a + b, 0) / only_numbers.length;
  return average_number;
}
const app = Vue.createApp({
  data() {
    return { 
      chamber: this.getChamber(),
      members: this.created(),
      //at_glance_stats: this.atglancestats(members)      
   
     }
  },

  methods: {
    getChamber() {
      var params = (new URL(document.location)).searchParams;
      var chamber_params = params.get('chamber');
      var chamber="";
      switch (chamber_params) {
        case 'senate':
            var chamber = 'senate'
            break;
        case 'house':
           var chamber = 'house'
            break;
        case null:
            var chamber = 'senate'
            break;
        default:
              var chamber = 'senate'
    }
     return chamber
    },

    geturl() {
      var chamber="";
      chamber = this.getChamber();
      var json_url ="";
      switch (chamber) {
        case 'senate':
          var json_url = './jsons/pro-congress-117-senate.json';
          break;      
          case 'house':
            var json_url = './jsons/pro-congress-117-house.json';
            break;
        case null:
          var json_url = './jsons/pro-congress-117-senate.json';
            break;
        default:
          var json_url = './jsons/pro-congress-117-senate.json';
    }
    return json_url
  },
  
  created() {
    var json_url=this.geturl();
    fetchJson(json_url).then(members => {
      this.members = members.results[0].members;
      //console.log(members.results[0].members)
    })
  },
  
  atglancestats(members_array) {
     //console.log(members_array);
     // = jsonsenators.results[0].members;
    const republicanssymbol = 'R';
    var republicans = members_array.filter(x => x.party === republicanssymbol);
    const democratsssymbol = 'D';
    var democrats = members_array.filter(x => x.party === democratsssymbol);
    const independentsymbol = 'ID';
    var independent = members_array.filter(x => x.party === independentsymbol);
    republicanswithvote = republicans.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
    democratswithvote = democrats.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
    independentwithvote = independent.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
    rep_avg_votes_with_party_pct = republicanswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / republicanswithvote.length;
    if(Number.isNaN(rep_avg_votes_with_party_pct)) {
        rep_avg_votes_with_party_pct= 'N/A';
    } else { 
        rep_avg_votes_with_party_pct=Number(rep_avg_votes_with_party_pct.toFixed(2));
 
        };

    dem_avg_votes_with_party_pct = democratswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / democratswithvote.length;
    if(Number.isNaN(dem_avg_votes_with_party_pct)) {
        dem_avg_votes_with_party_pct='N/A';
    } else {
        dem_avg_votes_with_party_pct=Number(dem_avg_votes_with_party_pct.toFixed(2));
 
 
    };
    ind_avg_votes_with_party_pct = independentwithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / independentwithvote.length;
    if(Number.isNaN(ind_avg_votes_with_party_pct)) {
        ind_avg_votes_with_party_pct='N/A';
    } else {
            ind_avg_votes_with_party_pct=Number(ind_avg_votes_with_party_pct.toFixed(2));
 
        }
    var atglancestatsarray = [];
    arrayaverage_totals=[rep_avg_votes_with_party_pct, dem_avg_votes_with_party_pct, ind_avg_votes_with_party_pct];
    average_per_total= getaveragearray(arrayaverage_totals);
    
    if(Number.isNaN(average_per_total)) {
        ind_avg_votes_with_party_pct='N/A';
    } else {
        average_per_total=Number(average_per_total.toFixed(2));
 
        }
 
    var array_total = ["Total", members_array,average_per_total];
    atglancestatsarray.push(array_total);
    var array_row3 = ["Independent", independent.length, ind_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row3);
    var array_row2 = ["Democrats", democrats.length, dem_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row2);
    var array_row1 = ["Republicans", republicans.length, rep_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row1);
    return atglancestatsarray;
},


   }
}
)

app.mount('#app');