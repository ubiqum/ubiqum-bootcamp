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
      at_glance_stats:[],
      least_loyal_stats:[],
      most_loyal_stats:[]
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

  },

  async getData() {
    var json_url=this.geturl();
    try {
      let response = await fetch(json_url);
      this.members = await response.json();
      this.members=this.members.results[0].members;
      this.at_glance_stats= this.atglancestats(this.members);
      this.least_loyal_stats=this.leastloyal_stats(this.members);
      this.most_loyal_stats=this.mostloyal_stats(this.members)
      
    } catch (error) {
      console.log(error);
    }
  },
  atglancestats(members) {
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
    var array_row1 = ["Republicans", republicans.length, rep_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row1);
    var array_row2 = ["Democrats", democrats.length, dem_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row2);
    var array_row3 = ["Independent", independent.length, ind_avg_votes_with_party_pct];
    atglancestatsarray.push(array_row3);
    var array_total = ["Total", members.length,average_per_total];
    atglancestatsarray.push(array_total);
    return atglancestatsarray;
},
leastloyal_stats(members) {
  percent=10;
  n_rows = (members.length * (percent / 100)).toFixed();
  var reversed_least_loyal_members = members.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
  reversed_least_loyal_members_sliced = reversed_least_loyal_members.slice(0, n_rows);
  stats_least_loyal_members = [];
  reversed_least_loyal_members_sliced.forEach(element => {
      array_temp = [];
      var complete_name = element.first_name + " " + element.last_name;
      num_party_votes=((element.votes_with_party_pct/100)*element.total_votes).toFixed(0);
      array_temp = [complete_name, num_party_votes, element.votes_with_party_pct];
      stats_least_loyal_members.push(array_temp);
  });
  return stats_least_loyal_members;
},
mostloyal_stats(members) {
  percent=10;
  n_rows = (members.length * (percent / 100)).toFixed();
  var sort_most_loyal_members = members.sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct);
  sort_most_loyal_members_sliced = sort_most_loyal_members.slice(0, n_rows);
  stats_most_loyal_members = [];
  sort_most_loyal_members_sliced.forEach(element => {
      array_temp = [];
      var complete_name = element.first_name + " " + element.last_name;
      num_party_votes=((element.votes_with_party_pct/100)*element.total_votes).toFixed(0);
      array_temp = [complete_name, num_party_votes, element.votes_with_party_pct];
      stats_most_loyal_members.push(array_temp);
  });
  return stats_most_loyal_members;
}
    
   }
}
)

app.mount('#app');
// console.log(app01.$data.chamber)