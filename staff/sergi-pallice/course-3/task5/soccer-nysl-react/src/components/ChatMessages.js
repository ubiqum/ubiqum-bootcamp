import React from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useData, setData, useUserState } from "../utilities/firebase"

// sort function

export function NameForm(props) {

  const [message, setName] = useState("");
  const user = useUserState();
  const {id} = useParams();
  
  const handleSubmit = (evt) => {
    const newMessage = {
      "author": user[0].email,
      "text": message,
      "timestamp": Date.now()
    }

    // const totalMessages = Object.keys(data.messages[id]).length
    const messageId = 'message-7'
    setData(`/messages/${id}/${messageId}`, newMessage) 

    evt.preventDefault();
    alert(`Submitting Name ${message}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <input type="text" value={message} onChange={e => setName(e.target.value)}/>
      </label>
      <input type="submit" value="Post" />
    </form>
  );
}



export default function ChatMessages() {

    const {id} = useParams();
    
    const [data, loading, error] = useData('/');
    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading data...</div>;

    console.log(
      Object.keys(data.messages[id]).length
      )

    return (
        <div>

          <NameForm />
          <br></br>

          {Object.values(data.messages[id]).map( (message, index) => (
            <div className="container block-example border border-dark" key={index} style={{fontsize: 20}}>
                {/* {console.log(message)} */}
                {/* {"Date: " + Date(message.timestamp)}<br></br> */}
                {"Date: " + message.text}<br></br>
                {"Author: " + message.author}
            </div>
             ))}
          <br></br>
          <br></br>
        </div>
          )
}