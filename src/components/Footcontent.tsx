import React from 'react';
import { BehanceLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

type IconLink = {
    label: string;
    href: string;
    icon: JSX.Element;
};

const iconLinks: IconLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/claudianohlgard/', icon: <LinkedinLogo size={24} /> },
    { label: 'GitHub', href: 'https://github.com/geekmorsan', icon: <GithubLogo size={24} /> },
    { label: 'Behance', href: 'https://www.behance.net/nohlgard', icon: <BehanceLogo size={24} /> },
];

const Footcontent: React.FC = () => (
    <div className="flex items-center justify-around p-4">
        <div className="flex gap-4">
            {iconLinks.map(({ href, icon, label }) => (
                <a
                    key={href}
                    href={href}
                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline focus:outline-2 focus:outline-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                >
                    {icon}
                </a>
            ))}
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Claudia Nohlgård. All Rights Reserved.
        </span>
    </div>
);

export default Footcontent;
