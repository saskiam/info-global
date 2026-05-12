"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { formatDate } from "@/helpers/formatDate";
import Avatar from "./Avatar";
import { NewsCardProps } from "./Components.Interface";

export default function NewsCardsCarousel({
  news,
  setHoveredSlug,
}: NewsCardProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const amount = 340;

    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Boton izquierdo de carrousel */}
      <button
        onClick={() => scroll("left")}
        className="
          carousel-button
          left-2
          hidden md:flex
        "
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      {/* Boton derecho de carrousel */}
      <button
        onClick={() => scroll("right")}
        className="
          carousel-button
          right-2
          hidden md:flex
        "
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    {/* Render de cards article para el carrousel,
    set de eventos mouse y touch */}
      
      <div
        ref={carouselRef}
        className="
          flex
          items-stretch
          gap-6
          overflow-x-auto
          overflow-hidden
          scroll-smooth
          snap-x
          snap-mandatory
          px-4
          py-8
          scrollbar-thin
          scrollbar-track-gray-100

        "
      >
        {news.map((card) => (
          <article
            key={card.slug}
            onMouseEnter={() => setHoveredSlug(card.slug)}
            onTouchStart={() => setHoveredSlug(card.slug)}
            className="
              news-card
              snap-center
              shrink-0
              w-[85%]
              h-auto
              sm:w-[320px]
              md:w-[350px]
              lg:w-[380px]
              min-h-[520px]
              flex
              flex-col
              border
              border-gray-200
              bg-white
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
            "
          >
            {/* Imagen de noticia */}
            <div className="overflow-hidden">
              <Image
                src={card.coverImage?.src || "/no-img.jpg"}
                width={900}
                height={500}
                alt={card.title}
                className="
                  h-56
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Contenido de card */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    gap-4
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

                {/* Ttitulo */}
                <h2 className="mb-3 text-xl font-bold text-orange-500">
                  {card.title}
                </h2>

                {/* Excerpt */}
                <p className="mb-5 line-clamp-4 text-sm text-gray-700">
                  {card.excerpt || card.title}
                </p>
              </div>

              {/* Contenido de autor y boton */}
              <div className="flex items-center justify-between pt-4">
                <Avatar
                  avatar={card.author?.avatar}
                  authorName={card.author?.name}
                />

                <Link
                  href={`/article/${card.slug}`}
                  className="
                    flex items-center gap-2
                    font-semibold text-orange-600
                    transition
                    hover:underline
                    active:scale-95
                  "
                >
                  <span>Leer más</span>

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}