import React from 'react';
import { useParams } from 'react-router-dom';

const InventorDetails = () => {
    const {_id} =useParams();
    return (
        <div className='container'>
            <p>{_id}</p>
        </div>
    );
};

export default InventorDetails;