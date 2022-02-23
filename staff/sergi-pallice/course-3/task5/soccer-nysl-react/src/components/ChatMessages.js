import React from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useData, setData, useUserState } from "../utilities/firebase"
import { useNavigate } from 'react-router-dom'
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// sort function
const headingStyle = { textAlign: "center" }

export default function ChatMessages() {

    const navigate = useNavigate();
    const {id} = useParams();
    const user = useUserState();    
    const [message, setName] = useState("");

    const [data, loading, error] = useData('/');
    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading data...</div>;

    const handleSubmit = (evt) => {
      const newMessage = {
        "author": user[0].email,
        "text": message,
        "timestamp": Date.now()
      }
  
      const totalMessages = Object.keys(data.messages[id]).length + 1
      const messageId = `message-${totalMessages}`
      setData(`/messages/${id}/${messageId}`, newMessage) 
  
      evt.preventDefault();
      // alert(`Submitting Name ${message}`)
    }

    return (
        <div>
          <div style={headingStyle}>
            <form onSubmit={handleSubmit}>
              <label>
                Type:
                <input type="text" value={message} onChange={e => setName(e.target.value)}/>
              </label>
              <input type="submit" value="Post" />
            </form>
          </div>
          <br></br>

          <div  className="container block-example border-dark"
                style={headingStyle}
                onClick={() => navigate('/pictures/' + id) }>
            <FontAwesomeIcon icon={faImages}/>
            {' '} View/Upload Pictures
          </div>
          <br></br>

          {Object.values(data.messages[id]).reverse().map( (message, index) => (
            <div className="container block-example border border-dark" key={index} style={{fontsize: 20}}>
                {"Message: " + message.text}<br></br>
                {"Author: " + message.author}
            </div>
             ))}
          <br></br>
          <br></br>
        </div>
          )
}