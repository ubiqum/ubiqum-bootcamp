import { useParams } from "react-router-dom";
import logo from './nysl_logo.svg';
import {nysl_league,logo_alttext,logo_width} from "./components/home.js"
export const page_gameinfo_header = "Game Info";
export const season_title = "Fall Schedule";
export const dayweek_warning = "* All games take place on Saturday";
export const table_games_header = [
   {
      "id": "01",
      "first_col": "Date",
      "second_col": "Teams",
      "third_col": "Location",
      "fourth_col": "Times"
   }
]
export const additional_info_game = [
   {
      "id": "01",
      "label": "Facility Type:",
      "info": "Outdoor",
   },
   {
      "id": "02",
      "label": "Additional Information:",
      "info": "If deemed necessary by NYSL, games may be shortened or cancelled due to extreme weather conditions.",

   },
   {
      "id": "03",
      "label": "Please direct all questions to:",
      "info": "Michael Randall, League Coordinator",

   },
   {
      "id": "04",
      "label": "Phone:",
      "info": "(630) 690-8132",
   },
   {
      "id": "05",
      "label": "Email:",
      "info": "michael.randall@chisoccer.org"
   }
   , {
      "id": "06",
      "label": "",
      "info": ""
   }

]

export const game_locations =
{
   "01": [
      {
         "name_location": "AJ Katzenmaier Elementary",
         "address": "24 W. Walton St., Chicago, IL 60610",
         "url_map": "https://goo.gl/maps/6b8Z6o6UG8nXyDL56"
      }],
   "02": [
      {
         "name_location": "Greenbay Elementary",
         "address": "1734 N. Orleans St., Chicago, IL 60614",
         "url_map": "https://goo.gl/maps/EKVcpqpMGC1yzwPj9"
      }
   ],

   "03": [
      {
         "name_location": "Howard A Yeager Elementary",
         "address": "2245 N. Southport Ave., Chicago, IL 60614",
         "url_map": "https://goo.gl/maps/jsn7JYJ3eRAgd3kw7"
      }],

   "04": [
      {
         "name_location": "Marjorie P Hart Elementary",
         "address": "2625 N. Orchard St., Chicago, IL 60614",
         "url_map": "https://goo.gl/maps/621gq7txUzApuPzF8"

      }],

   "05": [
      {
         "name_location": "North Elementary",
         "address": "1409 N. Ogden Ave., Chicago, IL 60610",
         "url_map": "https://goo.gl/maps/3ei5SWFMY3Ar1X8m8"
      }],
   "06": [
      {
         "name_location": "South Elementary",
         "address": "2101 N. Fremont St., Chicago, IL 60614",
         "url_map": "https://goo.gl/maps/rPTAja92ECpNW9667"
      }]
}


export const game_info = [
   {
      "id": "001",
      "Date": "2018-09-01",
      "Teams": "U1 and U4",
      "Location": "01",
      "Times": "9:30 a.m."
   },
   {
      "id": "002",
      "Date": "2018-09-01",
      "Teams": "U3 and U2",
      "Location": "02",
      "Times": "1:00 p.m."
   },
   {
      "id": "003",
      "Date": "2018-09-08",
      "Teams": "U5 and U6",
      "Location": "03",
      "Times": "9:30 a.m."
   },
   {
      "id": "004",
      "Date": "2018-09-08",
      "Teams": "U6 and U1",
      "Location": "04",
      "Times": "1:00 p.m."
   },
   {
      "id": "005",
      "Date": "2018-09-15",
      "Teams": "U2 and U4",
      "Location": "05",
      "Times": "9:30 a.m."
   },
   {
      "id": "006",
      "Date": "2018-09-15",
      "Teams": "U3 and U5",
      "Location": "01",
      "Times": "1:00 p.m."
   },
   {
      "id": "007",
      "Date": "2018-09-22",
      "Teams": "U1 and U3",
      "Location": "06",
      "Times": "9:30 a.m."
   },
   {
      "id": "008",
      "Date": "2018-09-22",
      "Teams": "U2 and U6",
      "Location": "03",
      "Times": "1:00 p.m."
   },
   {
      "id": "009",
      "Date": "2018-09-29",
      "Teams": "U4 and U5",
      "Location": "02",
      "Times": "9:30 a.m."
   },
   {
      "id": "010",
      "Date": "2018-10-06",
      "Teams": "U2 and U5",
      "Location": "04",
      "Times": "9:30 a.m."
   },
   {
      "id": "011",
      "Date": "2018-10-06",
      "Teams": "U1 and U6",
      "Location": "06",
      "Times": "1:00 p.m."
   },
   {
      "id": "012",
      "Date": "2018-10-13",
      "Teams": "U3 and U4",
      "Location": "03",
      "Times": "9:30 a.m."
   },
   {
      "id": "013",
      "Date": "2018-10-13",
      "Teams": "U5 and U1",
      "Location": "02",
      "Times": "1:00 p.m."
   },
   {
      "id": "014",
      "Date": "2018-10-20",
      "Teams": "U6 and U3",
      "Location": "05",
      "Times": "9:30 a.m."
   },
   {
      "id": "015",
      "Date": "2018-10-20",
      "Teams": "U2 and U4",
      "Location": "04",
      "Times": "1:00 p.m."
   },
   {
      "id": "016",
      "Date": "2018-10-27",
      "Teams": "U3 and U1",
      "Location": "01",
      "Times": "9:30 a.m."
   },
   {
      "id": "017",
       "Date": "2018-10-27",
      "Teams": "U5 and U6",
      "Location": "03",
      "Times": "1:00 p.m."
   }
   
]

export const GameDetails = () => {
   const {id} =useParams();
   return ( 
<div>
  <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> { nysl_league.title }</h5>
  <h5>Game Details {id}</h5>
  </div>
   );
}
