import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return (
        <div class="text-blue-gray-600">
            <footer class="py-2">
                <div class="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                    <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">© 2023 MeTime™. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;