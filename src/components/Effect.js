import { useEffect, useState } from "react";
import { fetchUser2 } from "../utils/service";

const Effect=()=>{
  const [userDetails, setUserDetails]=useState({});

  useEffect(()=>{
    fetchUser2()
    .then((res)=>setUserDetails(res));
    
   
  }, []);

  return <h2>Object={JSON.stringify(userDetails)}</h2>
}

export default Effect;