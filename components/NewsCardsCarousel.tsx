"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { formatDate } from "@/helpers/formatDate";
import Avatar from "./Avatar";
import { NewsCardProps } from "./Components.Interface";



export default function NewsCardsCarousel({
  news,
  setHoveredSlug,
}: NewsCardProps) {
  
  const [current, setCurrent] = useState(0);

  // Mover a la derecha siguiente bloque
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === news.length - 1 ? 0 : prev + 1
    );
  };

  // Mover a la izquierda bloque anterior
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? news.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Botón izquierdo */}
      <button
        onClick={prevSlide}
        className="
         carousel-button left-2
        "
      >
        ←
      </button>

      {/* Botón derecho */}
      <button
        onClick={nextSlide}
        className="
         carousel-button right-2
        "
      >
        →
      </button>

      {/* Carousel de cards de noticias */}
      <div
        className="
          flex
          transition-transform
          duration-700
          ease-in-out
        "
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {news.map((card) => (
          <div
            key={card.title}
            className="news-card-container"
          >
            <article
              className="
                news-card
              "
              onMouseEnter={() => setHoveredSlug(card.slug)}
            >
              {/* Imagen */}
              <div className="overflow-hidden">
                <Image
                  className="
                    h-55
                    w-full
                    object-cover
                  "
                  src={card.coverImage?.src || "/no-img.jpg"}
                  width={900}
                  height={500}
                  alt={card.title}
                />
              </div>

              {/* Contenido del artículo */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      justify-between
                      text-sm
                      font-bold
                      text-gray-500
                    "
                  >
                    <span>
                      {card.category.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />

                      <span>
                        {formatDate(card.publishedAt)}
                      </span>
                    </div>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-orange-500">
                    {card.title}
                  </h2>

                  <p className="mb-5 line-clamp-4 text-xs text-gray-700">
                    {card.excerpt || card.title}
                  </p>
                </div>

                {/* Footer de la card */}
                <div className="flex items-center justify-between pt-4">
                  <Avatar
                    avatar={card.author?.avatar}
                    authorName={card.author?.name}
                  />

                  <Link
                    href={`/article/${card.slug}`}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-2
                      font-semibold
                      text-orange-600
                      hover:underline
                    "
                  >
                    <p>Leer más</p>

                    <ArrowRight className="h-4 w-4 text-orange-600" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}