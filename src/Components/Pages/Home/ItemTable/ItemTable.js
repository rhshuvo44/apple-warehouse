import React from 'react';
import { toast } from 'react-toastify';

const ItemTable = ({item}) => {
  
    const {_id,name,price,quantity,supplierName}=item;
    const handleDelet=(id)=>{
      toast('deleted ')
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

export default ItemTable;