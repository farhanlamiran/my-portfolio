// utils/scrollToSection.ts
import { gsap } from 'gsap';

export const scrollToSection = (selector: string, duration = 0.5) => {
    const element = document.querySelector(selector);
    if (element) {
        gsap.to(window, {
            scrollTo: {
                y: element,
                offsetY: 70, // offset jika ada fixed navbar
                autoKill: false
            },
            duration,
            ease: 'sine.out',
        });
    }
};
