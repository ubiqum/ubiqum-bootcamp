import logo from '../nysl_logo.svg';
import { storage,SignInButton, useUserState, SignOuButton } from '../utilities/firebase.js';
import { nysl_league, logo_alttext, logo_width } from "../components/home.js";
import React from 'react';
import { ref, uploadBytesResumable} from "firebase/storage";
const page_photos_header = "Photos";

const handleFile = async (event) => {
   console.log(storage)
   var file=event.target.files[0];   
   console.log(file.name);
   const jpgref = ref(storage, 'images/mountains.jpg');
   const uploadTask = uploadBytesResumable(jpgref, file);
    //await jpgref.put(file.name);
    //const url = await uploadTask.getDownloadURL();
    console.log(uploadTask);
    }
export function Photos() {
   
   const [user] = useUserState();
    return ( 
   <div> 
   <div className="btn-toolbar justify-content-between">
      <div>
        <h5> <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
      </div>
      <div>
        {user ? <SignOuButton /> : <SignInButton />}
      </div>
    </div>
    <h5>{page_photos_header}</h5>

<div>  
 <label htmlFor="gamephoto">Choose a game photo:</label>
 <input type="file" accept="image/*" onChange={event => handleFile(event) } />
</div>
</div>
   )
}
