import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiTailwindcss,
    SiMongodb,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface ISkill {
    name: string;
    icon: IconType;
}

export const SKILL:ISkill[] = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
];
