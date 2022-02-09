import game_data from "../data/game_data.json"
import { useParams } from "react-router-dom";

// const sortBy = (arr, k) => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
// var game_data1 = sortBy(game_data.messages["001"], "message-1")

export default function ChatMessages() {

    // const { id } = useParams();
    const id = "001"

    return (
        <div>
          {Object.values(game_data.messages[id]).map( (message, index) => (
            <div className="container block-example border border-dark" key={index}>
                {/* {console.log(message)} */}
                {/* {"Date: " + Date(message.timestamp)}<br></br> */}
                {"Date: " + message.timestamp}<br></br>
                {"Author: " + message.author}
            </div>
             ))}
        </div>
          )
}