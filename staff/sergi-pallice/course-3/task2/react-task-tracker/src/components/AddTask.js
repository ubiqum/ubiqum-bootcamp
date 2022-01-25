import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()  // so it doesn't actually submit to a page
        if(!text) {
            alert("Please add a task")
            return
        }
        onAdd({text, day})
        //setText('') // clear the form
        //setDay('') // clear the form
    }
    
    return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
          <label>Task</label>
          <input
            type="text" 
            placeholder="Add Task" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
      </div>
      <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text" 
            placeholder="Add Day & Time"
            value={day} 
            onChange={(e) => setDay(e.target.value)} 
          />
      </div>

      <input className='btn btn-block' type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask
