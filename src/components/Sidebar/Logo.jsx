import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-2 mb-8">
            <div
                className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
            >
                <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
                Kanban
            </span>
        </div>
    );
};

export default Logo;