import React from 'react';

const NotFound = () => {
    return (
        <div className='container py-5 text-center' style={{height:'72vh'}}>
            <h1 className='py-5 mt-5 text-danger'>404</h1>
            <h1 className='pb-5 text-danger'>Oops, this pages does not exist</h1>
        </div>
    );
};

export default NotFound;