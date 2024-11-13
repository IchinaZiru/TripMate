import React, { useEffect } from 'react';
import './Slideshow.css';
import image1 from "./images/1.jpg"

const Slideshow = () => {
    useEffect(() => {
        const images = [
            { src: image1 },
            'url(./images/1.jpg)',
            'url(./images/image2.jpg)',
            'url(./images/image3.jpg)',
            'url(./images/image4.jpg)',
            'url(./images/image5.jpg)',
        ];

        const slideshowElement = document.querySelector('.slideshow');

        images.forEach(image => {
            const div = document.createElement('div');
            div.style.backgroundImage = image;
            slideshowElement.appendChild(div);
        });

        let currentIndex = 0;
        const totalImages = images.length;

        function changeSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            slideshowElement.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        const intervalId = setInterval(changeSlide, 5000);

        return () => clearInterval(intervalId); // クリーンアップ
    }, []);

    return (
        <div className="slideshow-container">
            <div className="slideshow"></div>
        </div>
    );
};

export default Slideshow;