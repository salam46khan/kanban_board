import React from 'react';

const NavItem = ({children, isActive}) => {
    return (
        <a
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive? "text-blue-600 bg-blue-50 font-medium": "text-gray-700 hover:bg-gray-100"}`}
        >
            {children}
        </a>
    );
};

export default NavItem;