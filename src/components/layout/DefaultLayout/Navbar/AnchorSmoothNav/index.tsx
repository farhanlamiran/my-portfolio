// components/nav/DesktopNav.tsx
import React from 'react';
import { scrollToSection } from '@/utils/scrollToSection';
import Link from 'next/link';

export interface AnchorItem {
    id: string;
    label: string;
}

interface AnchorProps {
    items: AnchorItem[];
    className?: string;
}

const AnchorSmoothNav: React.FC<AnchorProps> = ({ items, className = "" }) => {
    return (
        <>
            {items.map(({ id, label }) => (
                <Link
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(`#${id}`);
                    }}
                    className = {className}
                    // "text-white/80 hover:text-white transition-colors"
                >
                    {label}
                </Link>
            ))}
        </>
    );
};

export default AnchorSmoothNav;
