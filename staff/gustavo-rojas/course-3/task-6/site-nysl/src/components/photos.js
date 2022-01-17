import logo from '../nysl_logo.svg';
import { storage,SignInButton, useUserState, SignOuButton,database } from '../utilities/firebase.js';
import { nysl_league, logo_alttext, logo_width } from "../components/home.js";
import React from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {ref as refdatabase, set } from 'firebase/database';
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const page_photos_header = "Photos";

function photo_unique_id() {
  return uuidv4()
}
function Saveimagedata(id,url,user) {
 var email = user.email;
 var photouniqueid = photo_unique_id();
 var timestampphoto = new Date().getTime();
 var refimagedata=refdatabase(database, '/photos/' + id + '/' + photouniqueid);
 set(refimagedata,{
                      author: email,
                      url: url,
                      timestamp: timestampphoto,
                      id: photouniqueid
                    })
}

const HandleFile = async (event,id,user) => {
  var file=event.target.files[0];   
  const metadata = {contentType: 'image/jpeg'};
  const storageRef = ref(storage, 'images/' +id+'/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file,metadata);
  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
      console.log(`Default case`);
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;
      // ...
      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
      default:
          console.log(`Default case`);
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //console.log('File available at', downloadURL);
      Saveimagedata(id,downloadURL,user);
    });
  }
);
    }
export function Photos() {
  const { id } = useParams();
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
 <input type="file" accept="image/*" onChange={event => HandleFile(event,id,user) } />
</div>
</div>
   )
}
