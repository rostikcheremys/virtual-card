'use client';

import Image from "@/app/components/Image";
import AboutMe from "@/app/components/AboutMe";
import MySkills from "@/app/components/MySkills";
import Contact from "@/app/components/Contact"

export default function Page() {
    return (
        <div className="container">
            <div className="card-container">
                <Image/>

                <div className="profile">
                    <AboutMe/>
                    <MySkills/>
                    <Contact/>
                </div>
            </div>
        </div>
    );
}