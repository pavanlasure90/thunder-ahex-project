"use client"

import React from 'react';

interface MenuItemProps {
    children: React.ReactNode;
    onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className='px-4 py-3 bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer'>
            {children}
        </div>
    );
};

export default MenuItem;
