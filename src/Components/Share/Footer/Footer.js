import React from 'react';

const Footer = () => {
    const today = new Date();
          const  date = today.getFullYear()
    return (
        <div className='bg-dark py-5 text-white'>
            <p className='text-center'>Copyright © {date} Apple Inc. All rights reserved.</p>
        </div>
    );
};

export default Footer;