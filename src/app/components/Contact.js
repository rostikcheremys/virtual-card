'use client';

import {FaEnvelope, FaGithub, FaTelegram} from "react-icons/fa";

export default function AboutMe() {
    return (
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
    );
}