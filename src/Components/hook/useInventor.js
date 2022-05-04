import { useEffect, useState } from "react";


const useInventor = () => {
   const [items,setitems]=useState([]);
   useEffect(()=>{
       fetch('items.json')
       .then(res=>res.json())
       .then(data=>setitems(data))
   },[]);
   return [items];
};

export default useInventor;