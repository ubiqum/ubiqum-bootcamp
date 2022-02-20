import React from "react"
import { useParams } from "react-router-dom";
import { useData, setData } from "../utilities/firebase"

// sort function

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    const messageX = {
      "author": "spallice@gmail.com",
      "text": this.state.value,
      "timestamp": Date.now()
    }

    const id1 = '001'
    const messageId = 'message-5'
    setData(`/messages/${id1}/${messageId}`, messageX) 

    alert('A message was submitted: ' + this.state.value);   
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* {console.log( Date.now() )}
        {console.log(this.state)} */}
        <label> Type:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

    // Fetch data
    //setData = (path, value)


export default function ChatMessages() {

    const {id} = useParams();
    
    const [data, loading, error] = useData('/');
    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading data...</div>;

    // const messageX = {
    //     "message-5": {
    //     "author": "spallice@gmail.com",
    //     "text": "this.state.value",
    //     "timestamp": "Date.now()"
    //   }
    // }
    // setData('/messegaes', messageX)

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