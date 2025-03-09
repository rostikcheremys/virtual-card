'use client';

import {FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact} from "react-icons/fa";
import {SiC, SiFigma, SiGit, SiNextdotjs, SiPhp, SiPostgresql, SiTailwindcss} from "react-icons/si";

export default function MySkills() {
    return (
        <div className="my-skills">
            <h3>My Skills</h3>
            <div className="line-item"/>

            <div className="overflow-auto">
                <ul className="skills-list">
                    <li className="skill-item">
                        <FaHtml5 size={60} color="#E34F26"/>
                        <p>HTML</p>
                    </li>
                    <li className="skill-item">
                        <FaCss3Alt size={60} color="#1572B6"/>
                        <p>CSS</p>
                    </li>
                    <li className="skill-item">
                        <FaJs size={60} color="#F7DF1E"/>
                        <p>JavaScript</p>
                    </li>
                    <li className="skill-item">
                        <FaReact size={60} color="#61DBFB"/>
                        <p>React</p>
                    </li>
                    <li className="skill-item">
                        <SiNextdotjs size={60} color="#FFFFFF"/>
                        <p>Next.js</p>
                    </li>
                    <li className="skill-item">
                        <FaBootstrap size={60} color="#7952B3"/>
                        <p>Bootstrap</p>
                    </li>
                    <li className="skill-item">
                        <SiTailwindcss size={60} color="#0094cc"/>
                        <p>Tailwind CSS</p>
                    </li>
                    <li className="skill-item">
                        <SiGit size={60} color="#F05032"/>
                        <p>Git</p>
                    </li>
                    <li className="skill-item">
                        <FaGithub size={60} color="#FFFFFF"/>
                        <p>GitHub</p>
                    </li>
                    <li className="skill-item">
                        <SiPostgresql size={60} color="#336791"/>
                        <p>PostgreSQL</p>
                    </li>
                    <li className="skill-item">
                        <SiPhp size={60} color="#4F5D95"/>
                        <p>PHP</p>
                    </li>
                    <li className="skill-item">
                        <SiC size={60} color="#68217A"/>
                        <p>C#</p>
                    </li>
                    <li className="skill-item">
                        <SiFigma size={60} color="#F24E1E"/>
                        <p>Figma</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}