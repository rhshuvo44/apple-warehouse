import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventor from '../../../hook/useInventor';
import ItemTable from '../ItemTable/ItemTable';

const InventorManage = () => {
    const [items]=useInventor([])
    return (
        
        <div className='container py-5 text-center'>
            <h2 >Manage Inventory</h2>
            <Link className='my-3 btn btn-primary' to="/addItem">Add New Item</Link>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Items</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Supplier Name</th>
      <th>Update</th>
      <th>Deleted</th>
    </tr>
  </thead>
  <tbody>
    {
        items.map(item=><ItemTable key={item._id} item={item}></ItemTable>)
    }
  </tbody>
</Table>
        </div>
    );
};

export default InventorManage;