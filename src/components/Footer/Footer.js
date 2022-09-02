import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="p-8 bg-slate-50 drop-shadow-lg mx-auto text-center">
            <span className="font-semibold">© {year} <a href="/"
                className="hover:underline text-red-500">Quiz App</a>. All Rights Reserved.
            </span>

        </footer>
    );
};

export default Footer;