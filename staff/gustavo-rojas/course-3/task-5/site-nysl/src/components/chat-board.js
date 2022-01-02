import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import React from 'react';
import { nysl_league, logo_alttext, logo_width } from "../components/home.js";
import logo from '../nysl_logo.svg';
import {ref} from 'firebase/database';
import { SignInButton, useUserState, SignOuButton,database } from '../utilities/firebase.js'
import {game_info,game_locations,label_game_details,Warninguserstosignin} from '../components/gameinfo.js'
import { getAuth } from 'firebase/auth';
import { useDatabase, DatabaseProvider, AuthProvider, useFirebaseApp,useDatabaseListData} from 'reactfire';
import { Formik } from 'formik';
const page_gamechatboard_header = "Game Board Chat";
function FirebaseMessagesreactfire({ children }) {
   const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
   const auth = getAuth(app);
 
   // any child components will be able to use `useUser`, `useDatabaseObjectData`, etc
   return (
     <AuthProvider sdk={auth}>
       <DatabaseProvider sdk={database}>
        <Showmessages/> 
        <Formmessage/>
       </DatabaseProvider>
     </AuthProvider>
   );
 }
function Showmessages() {
   var database = useDatabase();
   const { id } = useParams();
   const gameid=id
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
            </div>
       )
                           }
   if (status === 'loading') {
      return <span>Loading...</span>;
    }
   ;
}

const Formmessage = () => (
   <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );

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

   