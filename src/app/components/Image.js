'use client';

import Image from "next/image";

export default function ImageItem() {
    return (
        <div className="image-container">
            <Image src="/image.png" className="img-item" alt="Image" width={500} height={750}/>
        </div>
    );
}