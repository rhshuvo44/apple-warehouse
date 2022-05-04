import { useEffect, useState } from "react";


const useInventor = () => {
   const [items,setitems]=useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/inventors')
       .then(res=>res.json())
       .then(data=>setitems(data))
   },[]);
   return [items];
};

export default useInventor;