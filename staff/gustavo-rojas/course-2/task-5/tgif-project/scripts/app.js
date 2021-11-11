const app = Vue.createApp({
  data() {
    return { 
      chamber: this.getChamber()
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
    }
  }
});
  app.mount('#app');