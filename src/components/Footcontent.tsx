import React from 'react';
import { BehanceLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

type IconLink = {
    label: string;
    href: string;
    icon: JSX.Element;
};

const iconLinks: IconLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/claudianohlgard/', icon: <LinkedinLogo size={28} color="currentColor" /> },
    { label: 'GitHub', href: 'https://github.com/geekmorsan', icon: <GithubLogo size={28} color="currentColor" /> },
    { label: 'Behance', href: 'https://www.behance.net/nohlgard', icon: <BehanceLogo size={28} color="currentColor" /> },
];

const Footcontent: React.FC = () => (
    <div className="flex items-center border-t w-[40vw] border-accent-1-hover justify-between flex-col gap-2 md:gap-4 p-4 md:p-6">
        <div className="flex md:mt-2 gap-4">
            {iconLinks.map(({ href, icon, label }) => (
                <a
                    key={href}
                    href={href}
                    className="p-2 rounded hover:outline-accent-1-hover text-accent-1-dark hover:text-accent-1-light
                    transform scale-100 transition-transform duration-200 hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                >
                    {icon}
                </a>
            ))}
        </div>
        <span className="text-sm text-type-2 text-center">
            © 2024 Claudia Nohlgård. All Rights Reserved.
        </span>
    </div>
);

export default Footcontent;
