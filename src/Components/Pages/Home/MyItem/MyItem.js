import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useInventor from '../../../hook/useInventor';
import UserItem from '../UserItem/UserItem';

const MyItem = () => {
    const [user]=useAuthState(auth);
    const [items]=useInventor({});
    const email=user.email;
    const myitems= items.filter(item=>item.email === email)
    return (
        <div className='container py-5 text-center'>
            <h1 className='py-5'>My Items</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Items</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Supplier Name</th>
      <th>Deleted</th>
    </tr>
  </thead>
  <tbody>
    {
        myitems.map(item=><UserItem key={item._id} item={item}></UserItem>)
    }
  </tbody>
</Table>
        </div>
    );
};

export default MyItem;