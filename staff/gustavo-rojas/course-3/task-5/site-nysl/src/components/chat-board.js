import { v4 as uuidv4 } from 'uuid';
//import React from 'react';
//import { useNavigate } from "react-router-dom";
//import { Router } from 'react-router';
//import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export function message_unique_id() {
    return uuidv4()

}
export function Chatboard() {
  const { id } = useParams();
  return <div>
          <p> Hello {id} </p>
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

   