import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventor from '../../../hook/useInventor';

const ItemTable = ({item}) => {
  const [items,setitems]=useInventor();
  const navigate=useNavigate();
  
    const {_id,name,price,quantity,supplierName}=item;
    const handleUpdate=(id)=>{
      navigate(`/inventors/${id}`)
    }
    const handleDelete=(id)=>{
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
      <td><button onClick={()=>handleUpdate(_id)} className='btn btn-danger'>Update</button></td>
      <td><button onClick={()=>handleDelete(_id)} className='btn btn-danger'>Deleted</button></td>
    </tr>
    );
};

export default ItemTable;