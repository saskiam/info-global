"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/services/news.types";
type NewCarouselProps = {
  news: NewsArticle[]
}


export default function NewsCarousel( {news}: NewCarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = async () => {
      setCurrentImage((currentImage + 1) % (await news).length);
    };
    const prevImage = async () => {
      setCurrentImage((currentImage - 1 + (await news).length) % news.length);
    }

    // crear un intervalo de tiempo para cambiar la imagen mediante useEffect
     useEffect(() => {
       const interval = setInterval(() => {
         nextImage();
       }, 10000);
       return () => clearInterval(interval);
     }, [currentImage]);


  return (
    <section className="relative w-full overflow-hidden ">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {news?.map((slide) => (
          <div
            key={slide.id}
            className="
              relative
              min-w-full
              overflow-hidden
            "
          >
            {/* Responsive height */}
            <div
              className="
                relative
                h-[300px]

                sm:h-[350px]

                md:h-[450px]

                lg:h-[600px]
              "
            >
              <Image
                src={slide.coverImage?.src || "/no-img.jpg" }
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-10
                  w-full
                  p-4

                  sm:p-6

                  md:p-10
                "
              >
                <div className="max-w-2xl px-5">
                  <span
                    className="
                      rounded-full
                      bg-white/20
                      px-3
                      py-1
                      text-xs
                      text-white
                      backdrop-blur

                      md:text-sm
                    "
                  >
                    {slide.category}
                  </span>

                  <h2
                    className="
                      mt-4
                      text-2xl
                      font-bold
                      text-white

                      sm:text-2xl

                      lg:text-4xl
                    "
                  >
                    {slide.title}
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      text-gray-200

                      sm:text-base

                      lg:text-lg
                    "
                  >
                    {slide.excerpt}
                  </p>

                  <button
                    className="
                      mt-6
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      font-medium
                      text-black
                      transition
                      hover:scale-105
                    "
                  >
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevImage}
        className="
          absolute
          left-4
          top-1/2
          z-20
          -translate-y-1/2

          rounded-full
          bg-black/40
          p-3
          text-white
          backdrop-blur
          transition

          hover:bg-black/60
        "
      >
        ←
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="
          absolute
          right-4
          top-1/2
          z-20
          -translate-y-1/2

          rounded-full
          bg-black/40
          p-3
          text-white
          backdrop-blur
          transition

          hover:bg-black/60
        "
      >
        →
      </button>

      {/* Indicators */}
      <div
        className="
          absolute
          bottom-4
          left-1/2
          z-20
          flex
          -translate-x-1/2
          gap-2
        "
      >
        {news?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`
              h-2
              rounded-full
              transition-all

              ${
                currentImage === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}