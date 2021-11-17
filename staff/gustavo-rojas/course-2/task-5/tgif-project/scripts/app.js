function getaveragearray (arrayoftotals) {
  var only_numbers = arrayoftotals.filter(function (item) {
      return (!isNaN(item));
    });
  if(only_numbers.length===0) {
      return 'N/A'
  };
  var average_number=only_numbers.reduce((a, b) => a + b, 0) / only_numbers.length;
  return average_number;
}
const app = Vue.createApp({
  data() {
    return { 
      chamber: this.getChamber(),
      members: this.getData(),
      at_glance_stats:[]
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
    
    //fetchJson(json_url).then(members => {
      //this.members = members.results[0].members;
   // })
  },

  async getData() {
    var json_url=this.geturl();
    try {
      let response = await fetch(json_url);
      this.members = await response.json();
      this.members=this.members.results[0].members;
      this.at_glance_stats= this.atglancestats(this.members)
      
    } catch (error) {
      console.log(error);
    }
  },
  atglancestats(members) {
    //var members= this.getData();
    //console.log(members);
    const republicanssymbol = 'R';
    var republicans = members.filter(x => x.party === republicanssymbol);
    const democratsssymbol = 'D';
    var democrats = members.filter(x => x.party === democratsssymbol);
    const independentsymbol = 'ID';
    var independent = members.filter(x => x.party === independentsymbol);
    var republicanswithvote = republicans.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
    var democratswithvote = democrats.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
    var independentwithvote = independent.filter(x => typeof (x.votes_with_party_pct) !== "undefined");
    var rep_avg_votes_with_party_pct = republicanswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / republicanswithvote.length;
    if(Number.isNaN(rep_avg_votes_with_party_pct)) {
        rep_avg_votes_with_party_pct= 'N/A';
    } else { 
        rep_avg_votes_with_party_pct=Number(rep_avg_votes_with_party_pct.toFixed(2));
 
        };

    var dem_avg_votes_with_party_pct = democratswithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / democratswithvote.length;
    if(Number.isNaN(dem_avg_votes_with_party_pct)) {
        dem_avg_votes_with_party_pct='N/A';
    } else {
        dem_avg_votes_with_party_pct=Number(dem_avg_votes_with_party_pct.toFixed(2));
 
 
    };
    var ind_avg_votes_with_party_pct = independentwithvote.reduce((a, b) => a + b.votes_with_party_pct, 0) / independentwithvote.length;
    if(Number.isNaN(ind_avg_votes_with_party_pct)) {
        ind_avg_votes_with_party_pct='N/A';
    } else {
            ind_avg_votes_with_party_pct=Number(ind_avg_votes_with_party_pct.toFixed(2));
 
        }
    var atglancestatsarray = [];
    var arrayaverage_totals=[rep_avg_votes_with_party_pct, dem_avg_votes_with_party_pct, ind_avg_votes_with_party_pct];
    var average_per_total= getaveragearray(arrayaverage_totals);
    
    if(Number.isNaN(average_per_total)) {
        ind_avg_votes_with_party_pct='N/A';
    } else {
        average_per_total=Number(average_per_total.toFixed(2));
 
        }
 
    var array_total = ["Total", members.length,average_per_total];
    atglancestatsarray.push(array_total);
    var array_row3 = ["Independent", independent.length, ind_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row3);
    var array_row2 = ["Democrats", democrats.length, dem_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row2);
    var array_row1 = ["Republicans", republicans.length, rep_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row1);
    //console.log(atglancestatsarray);
    return atglancestatsarray;
},
    
   }
}
)

app.mount('#app');
// console.log(app01.$data.chamber)