"use client";

import { useState } from "react";

import NewsCarousel from "./FrontArticle";
import NewsCardsCarousel from "./NewsCardsCarousel";

import {
  NewsCardsWrapperProps,
  NewsSections,
} from "./Components.Interface";

export default function NewsCardsWrapper({
  sections,
}: NewsCardsWrapperProps) {
  //Elevación de estado para manejar valor del slug al pasar el mouse
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  //Se extraen las secciones
  const scienceNewsSectionn = sections.find(
    (section: NewsSections) => section.title === "Ciencia"
  );

  const sportsNewsSection = sections.find(
    (section: NewsSections) => section.title === "Deportes"
  );

  const technologyNewsSection = sections.find(
    (section: NewsSections) => section.title === "Tecnologia"
  );

  const allArticles = sections.flatMap(
    (section) => section.news
  );

  const currentArticle = allArticles.find(
    (article) => article.slug === hoveredSlug
  );

  return (
    <>
      <NewsCarousel
        mainArticle={currentArticle ?? allArticles[0]}
      />

      {/* Ciencia */}
      <section
        id="ciencia"
        className="section-content"
      >
        <h5 className="section-title">
          Ciencia · Enterate de los ultimos avances cientificos
        </h5>

        <NewsCardsCarousel
          news={scienceNewsSectionn?.news ?? []}
          setHoveredSlug={setHoveredSlug}
        />
      </section>

      {/* Deportes */}
      <section
        id="deportes"
        className="section-content"
      >
        <h5 className="section-title">
          Deportes · Todo sobre el deporte en el mundo
        </h5>

        <NewsCardsCarousel
          news={sportsNewsSection?.news ?? []}
          setHoveredSlug={setHoveredSlug}
        />
      </section>

      {/* Tecnología */}
      <section
        id="tecnologia"
        className="section-content"
      >
        <h5 className="section-title">
          Tecnología · Infórmate sobre los nuevos avances tecnológicos
        </h5>

        <NewsCardsCarousel
          news={technologyNewsSection?.news ?? []}
          setHoveredSlug={setHoveredSlug}
        />
      </section>
    </>
  );
}