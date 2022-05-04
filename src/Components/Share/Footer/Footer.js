import React from 'react';

const Footer = () => {
    const today = new Date();
          const  date = today.getFullYear()
    return (
        <div>
            <p>Copyright © {date} Apple Inc. All rights reserved.</p>
        </div>
    );
};

export default Footer;