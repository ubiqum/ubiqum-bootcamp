import { useData, setData, useUserState, storage } from "../utilities/firebase"
import { useState } from "react";

export default function Pictures() {

    // const [user] = useUserState();
    // const { id } = useParams();
 
    // const [data, loading, error] = useData('/');
    // if (error) return <div>Error: {error.message}</div>;
    // if (loading) return <div>Loading data...</div>;
    const [url, setUrl] = useState();
 
     return (
        <div>
            Hello
        </div>
     )
  }