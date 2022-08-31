import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer class="p-8 bg-slate-50 drop-shadow-lg mx-auto text-center">
            <span class="font-semibold">© {year} <a href="/"
                class="hover:underline text-red-500">Quiz App</a>. All Rights Reserved.
            </span>

        </footer>
    );
};

export default Footer;