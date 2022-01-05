import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import React from 'react';
import { nysl_league, logo_alttext, logo_width } from "../components/home.js";
import logo from '../nysl_logo.svg';
import {ref,set} from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { SignInButton, useUserState, SignOuButton,database } from '../utilities/firebase.js'
import {game_info,game_locations,label_game_details,Warninguserstosignin} from '../components/gameinfo.js'
import { useDatabase, DatabaseProvider, AuthProvider, useFirebaseApp,useDatabaseListData} from 'reactfire';
import {useFormik } from 'formik';
//import { useNavigate } from "react-router-dom";

const page_gamechatboard_header = "Game Board Chat";

function FirebaseMessagesreactfire({ children }) {
   const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
   const auth = getAuth(app);
   const [user] = useUserState();
   const {id} = useParams();
  const messagesmetada = {
    user:user,
    gameid: id,    
     };
    // any child components will be able to use `useUser`, `useDatabaseObjectData`, etc
   return (
     <AuthProvider sdk={auth}>
       <DatabaseProvider sdk={database}>
        <Showmessages messagesmetada={messagesmetada}/> 
        </DatabaseProvider>
     </AuthProvider>
   );
 }
 const  Writemessage = () => {
  const { id } = useParams();
  let gameid=id;
  let values01={ textarea: "A message" };
  let user= {email:"grojas@fastmail.com"}
  console.log(user);
  let useremail=user.email;
  let messageunqueid=message_unique_id(); 
  let timestamp01=new Date().getTime();
  set(ref(database, '/messages/'+ gameid + '/'+ messageunqueid), {
    author: useremail ,
    text:values01.textarea,
    timestamp : timestamp01,
    id:messageunqueid
  })
  .then(() => {
    console.log("Data Saved")
  })
  .catch((error) => {
    console.log("Error cannot save")
  });
}


function Showmessages(messagesmetada) {
      //console.log(messagesmetada)
  if (typeof (messagesmetada.messagesmetada.user) !== 'undefined') 
  { var useremail=messagesmetada.messagesmetada.user.email;
    var gameid=messagesmetada.messagesmetada.gameid;
    //console.log(useremail,gameid)
   }
  var usermessagemetadata={
    useremail:useremail,
    gameid:gameid

  }
  
  var database = useDatabase();
   var querypath='/messages/' + gameid;
   const messagesRef = ref(database,querypath);
   const { status, data: messages } =  useDatabaseListData(messagesRef);
   if (status==='success') {
    
      return (<div>
         <table className="table">
            <thead>
                  {table_game_chatboard.map(header => {
                     return (
                        <tr key={header.id}><th>{header.first_col}</th><th>{header.second_col}</th><th>{header.third_col}</th><th>{header.fourth_col}</th>
                        </tr>
                     )
                  })}
               </thead>
      
             <tbody>
                  {messages.map(message => 
                  {var datetime_temp= new Date(message.timestamp);
                   var date_temp=datetime_temp.getDate()+"/"+(datetime_temp.getMonth()+1)+"/"+datetime_temp.getFullYear();
                   var time_temp=datetime_temp.getHours()+ ":"+datetime_temp.getMinutes()+ ":"+datetime_temp.getSeconds();
                    return (
                        <tr key={message.id} ><td >{message.author}</td><td>{message.text}</td><td>{date_temp}</td><td>{time_temp}</td>
                        </tr>
                     )
                  })}
               </tbody>
         
         </table>
         <Messageform usermessagemetadata={usermessagemetadata}/> 
            </div>
       )
                           }
   if (status === 'loading') {
      return <span>Loading...</span>;
    }
   ;
}

const Messageform = (usermessagemetadata) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  console.log(usermessagemetadata);
  const formik = useFormik({
    initialValues: {
      textarea: '',
    },
    onSubmit: values => {Writemessage(values)
    
    }
    
  });
  return (
    <form onSubmit={formik.handleSubmit}>
     <div className="form-group">
      <input
      className="form-control" rows="3"
        id="textarea"
        name="textarea"
        type="textarea"
        onChange={formik.handleChange}
        value={formik.values.textarea}
      />
      </div>

      <button type="submit">Post a message</button>
    </form>
  );
};

export function message_unique_id() {
    return uuidv4()

}

export function Postmessage() {
   const handleSubmit = event => {
   event.preventDefault();
   alert("this is a test")
 }

  return(
    <div className="wrapper">
      <p>Write a message</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Message</p>
            <input message="message" />
          </label>
        </fieldset>
        <button type="submit">Post</button>
      </form>
    </div>
  )
};

const table_game_chatboard = [
   {
      "id": "01",
      "first_col": "Author",
      "second_col": "Message",
      "third_col": "Date",
      "fourth_col": "Time"
   }
]

const MessageListGame = () => {
  const [user] = useUserState();
  //console.log(user);
  return (
   <div>
   {user ? <FirebaseMessagesreactfire /> :<Warninguserstosignin/>}
    
    </div>)

} ;

export function Chatboard() {
  const { id } = useParams();
  const [user] = useUserState();

let gametodisplay = game_info.find(game => game.id === id);
var game_location_temp = game_locations[gametodisplay.Location][0].name_location;
var game_location_address_temp = game_locations[gametodisplay.Location][0].address;
  return <div>
          <div className="btn-toolbar justify-content-between">
         <div>
            <h5> <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
         </div>
         <div>
            {user ? <SignOuButton /> : <SignInButton />}
         </div>
          
          
          </div>
          <p> {page_gamechatboard_header}</p>
          <table className="table">
         <tbody>
            <tr><td>{label_game_details[0].label_date}</td><td>{gametodisplay.Date}</td></tr>
            <tr><td>{label_game_details[0].label_time}</td><td>{gametodisplay.Times}</td></tr>
            <tr><td>{label_game_details[0].label_location}</td><td>{game_location_temp}</td></tr>
            <tr><td>{label_game_details[0].label_address}</td><td>{game_location_address_temp}</td></tr>
            <tr><td>{label_game_details[0].label_team}</td><td>{gametodisplay.Teams}</td></tr>
         </tbody>
      </table>
      <MessageListGame />
          </div>
            }

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
   }
toTimestamp(randomDate(new Date(2012, 0, 1), new Date()))
export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

   