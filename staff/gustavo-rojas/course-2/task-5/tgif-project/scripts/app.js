const app = Vue.createApp({
  data() {
    return { 
      chamber: this.getChamber(),
      
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
  
  fetchJson(url, init){

    fetch(url, init).then((response) => {
      if (response.ok) {
        return response.json(); 
      }
      throw new Error(response.statusText);
    });

  }
  
  
   
  },
  
})

app.mount('#app');