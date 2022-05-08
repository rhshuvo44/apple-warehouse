import { useEffect, useState } from "react";


const useInventor = () => {
   const [items,setitems]=useState([]);
   useEffect(()=>{
       fetch('https://glacial-harbor-29138.herokuapp.com/inventors')
       .then(res=>res.json())
       .then(data=>setitems(data))
   },[items]);
   return [items,setitems];
};

export default useInventor;