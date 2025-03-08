'use client';

import Image from "next/image";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaEnvelope, FaTelegram} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiPhp, SiC, SiFigma, SiGit } from "react-icons/si"

export default function Page() {
    return (
        <div className="container">
            <div className="card-body">
                <div className="card-container">
                    <div className="image-container">
                        <Image src="/image.png" className="img-item" alt="Image" width={500} height={750}/>
                    </div>

                    <div className="profile">
                        <div className="about-me">
                            <h1>Hello! I'm Rostyslav</h1>
                            <div className="line-item"></div>
                            <p>
                                I am learning web development and passionate about creating interactive and
                                user-friendly websites. I enjoy exploring new technologies and constantly improving my
                                front-end development skills. I am always excited to learn new tools and techniques to
                                enhance my abilities and deliver better results.
                            </p>
                        </div>

                        <div className="my-skills">
                            <h3>My Skills</h3>
                            <div className="line-item"></div>
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

                        <div className="contact">
                            <h3>Contact Me</h3>
                            <div className="line-item"></div>
                            <ul className="social-icons">
                                <li className="social-item">
                                    <a href="https://github.com/rostikcheremys"><FaGithub size={45} color="#FFFFFF"/></a>
                                </li>
                                <li className="social-item">
                                    <a href="mailto:rostikcheremys@gmail.com"><FaEnvelope size={45} color="#D44638"/></a>
                                </li>
                                <li className="social-item">
                                    <a href="https://t.me/yourusername"><FaTelegram size={45} color="#0088cc"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
