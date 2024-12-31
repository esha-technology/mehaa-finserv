import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  buttonText: string;
  highlight?: string;
}

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Personal Loans",
      description: "Quick approval with competitive interest rates starting at 8.99% p.a.",
      highlight: "No collateral required for loans up to ₹5 Lakhs",
      imagePath: "/images/carousel/personal-loan.jpg",
      buttonText: "Apply Now"
    },
    {
      id: 2,
      title: "Business Financing Solutions",
      description: "Expand your business with flexible financing options up to ₹50 Lakhs",
      highlight: "Customized repayment plans for your business needs",
    imagePath: "/images/carousel/business-loan.jpg",
      buttonText: "Get Business Loan"
    },
    {
      id: 3,
      title: "Home Loans",
      description: "Make your dream home a reality with loans up to ₹2 Crores",
      highlight: "Attractive interest rates starting at 7.5% p.a.",
      imagePath: "/images/carousel/home-loan.jpg",
      buttonText: "Check Eligibility"
    },
    {
      id: 4,
      title: "Investment Advisory",
      description: "Expert financial guidance for wealth creation and management",
      highlight: "Personalized portfolio management services",
      imagePath: "/images/carousel/investment.jpg",
      buttonText: "Start Investing"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-100">
      {/* Carousel slides */}
      <div 
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="absolute flex h-full w-full">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className="relative h-full w-full flex-shrink-0"
            >
             <Image
                src={item.imagePath}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Content overlay */}
              <div className="absolute inset-0 bg-black/50">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h2>
                    <p className="text-xl md:text-2xl mb-4">{item.description}</p>
                    {item.highlight && (
                      <p className="text-lg md:text-xl text-green-400 font-semibold mb-8">
                        {item.highlight}
                      </p>
                    )}
                    <button className="mt-4 px-8 py-4 bg-green-500 text-white rounded-full 
                      hover:bg-green-600 transition-all duration-300 font-semibold text-lg
                      transform hover:scale-105">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-green-500/80 p-3
          text-white hover:bg-green-600 transition-colors duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-green-500/80 p-3
          text-white hover:bg-green-600 transition-colors duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-green-500 w-10' 
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;