import React from "react"
import { useParams } from "react-router-dom";
import { useData, setData, useUserState, storage } from "../utilities/firebase"
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes} from 'firebase/storage';
import { faCamera, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const headingStyle = { textAlign: "center" }
const imageStyle = { maxHeight: '100%', maxWidth: '100%' }


export default function Pictures() {

    const {id} = useParams();
    const user = useUserState();

    const [data, loading, error] = useData('/');
    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading data...</div>;

    const totalPictures = Object.keys(data.pictures[id]).length + 1
    const pictureId = `message-${totalPictures}`

    const saveImage = (image) => {
      const photoRef = storageRef(storage, `/${image.name}`);
      uploadBytes(photoRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
          setData(`/pictures/${id}/${pictureId}`, {
            author: user[0].email,
            url: downloadURL,
            timestamp: Date.now(),
          });
        });
      });
    };

  const handleImage = async (e) => {
      const image = e.target.files[0]
      await saveImage(image)
  }


    const imageURL = "https://firebasestorage.googleapis.com/v0/b/soccer-react-app-7f65c.appspot.com/o/why.png?alt=media&token=e877de0e-cb81-41cb-a6bd-23024ce108bf"

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
              {' '}
                <input
                  className="container block-example border-dark"
                  type="file" 
                  accept="image/*" 
                  onChange={handleImage} 
                  style={headingStyle}/>
                <br></br>
                <br></br>
                {Object.values(data.pictures[id]).reverse().map( (pic, index) => (
                <div className="container block-example border border-dark" key={index} style={{fontsize: 20}}>
                    {"Author: " + pic.author}<br></br>
                    <img src={pic.url} style={imageStyle}/>
                </div>
             ))}
             <br></br>
             <br></br>
            </div>

        </div>
     )
  }