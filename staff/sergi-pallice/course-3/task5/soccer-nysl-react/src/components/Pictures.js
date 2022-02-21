import React from "react"

import { app, database } from  "../utilities/firebase"
import { useData, setData, useUserState, storage } from "../utilities/firebase"
import { useState, useEffect } from "react";

import {
    getDownloadURL, getStorage, ref as storageRef, uploadBytes,
  } from 'firebase/storage';

import { faCamera, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headingStyle = { textAlign: "center" }









export default function Pictures() {

    const [image, setImage] = useState(null);
    
    const onImageChange = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0]; // get the supplied file
        // if there is a file, set image to that file
        if (file) {
          reader.onload = () => {
            if (reader.readyState === 2) {
              console.log(file);
              setImage(file);
            }
          };
          reader.readAsDataURL(e.target.files[0]);
        // if there is no file, set image back to null
        } else {
          setImage(null);
        }
      };

      const uploadToFirebase = () => {
        //1.
        if (image) {
          //2.
          const storageRef = storage;
          console.log(storage)
          //3.
          const imageRef = storageRef(image.name);
          //4.
          imageRef.put(image)
         //5.
         .then(() => {
            alert("Image uploaded successfully to Firebase.");
        });
        } else {
          alert("Please upload an image first.");
        }
      };

     return (
        <div>
            <h1 className="container bg-info" style={headingStyle}>
                <FontAwesomeIcon icon={faImages}/> Gallery</h1>

            <div    className="container block-example border-dark"
                    style={headingStyle}>
                    <FontAwesomeIcon icon={faCamera}/>
                    {' '} Upload New Pic
            </div>

            <div className="container">
                <input type="file" accept="image/x-png,image/jpeg" onChange={(e) => {onImageChange(e); }}/>
                <button onClick={() => {uploadToFirebase()}}>Upload</button>
            </div>

        </div>
     )
  }