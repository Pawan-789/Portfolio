import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  "/gallery/3.jpg",
  //"/gallery/8.jpg",
  "/gallery/4.jpg",
  "/gallery/1.jpg",
  "/gallery/5.jpg",
  "/gallery/2.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
];

const Gallery = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increased for a smoother transition
    slidesToShow: 3, // Displays 3 smaller images per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Reduced for a more dynamic feel
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="section bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="headline-2 text-center mb-6 text-2xl font-bold text-gray-800">Gallery</h2>
        <p className="text-gray-600 text-center mb-10">
          Explore a collection of my happiness, moments, and more!
        </p>
        <Slider {...sliderSettings} className="w-full max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
