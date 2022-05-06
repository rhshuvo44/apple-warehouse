import React from 'react';
import useInventor from '../../../hook/useInventor';
import Inventor from '../Inventor/Inventor';

const Inventors = () => {
    const [items]=useInventor([])
    return (
        <div className='container py-5'>
            <h1 className='text-center'>Items</h1>
            <div className="row">
                {
                    items.map(item=><Inventor key={item._id} item={item}></Inventor>)
                }
            </div>
            
        </div>
    );
};

export default Inventors;