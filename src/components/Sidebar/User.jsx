import React from 'react';

const User = () => {
    return (
        <div className="mt-auto px-4 py-6 sm:px-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold"
                >
                    AT
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                        Anna Taylor
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                        anna.taylor@mail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;