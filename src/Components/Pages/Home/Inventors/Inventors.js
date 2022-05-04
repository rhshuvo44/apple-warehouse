import React from 'react';
import useInventor from '../../../hook/useInventor';
import Inventor from '../Inventor/Inventor';

const Inventors = () => {
    const [items]=useInventor([])
    return (
        <div className='container'>
            <h1>My Items</h1>
            <div className="row">
                {
                    items.map(item=><Inventor key={item._id} item={item}></Inventor>)
                }
            </div>
            
        </div>
    );
};

export default Inventors;