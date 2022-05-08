import React from 'react';
import { toast } from 'react-toastify';
import useInventor from '../../../hook/useInventor';

const UserItem = ({item}) => {
    const [items,setitems]=useInventor()
  
    const {_id,name,price,quantity,supplierName}=item;
    const handleDelet=(id)=>{
      const deleteConfirm=window.confirm('Are you sure?')
      if(deleteConfirm){
        const url=`http://localhost:5000/inventors/${id}`
        fetch(url, {
          method: 'DELETE',
        })
        .then(res=>res.json())
        
        .then(data=>{
          const result=items.filter(item => item._id !== id);
          setitems(result);
          toast('Deleted Success')
        })
      }
    }
    return (
        <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{supplierName}</td>
      <td><button onClick={()=>handleDelet(_id)} className='btn btn-danger'>Deleted</button></td>
    </tr>
    );
};

export default UserItem;