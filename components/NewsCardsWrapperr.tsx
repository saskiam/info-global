"use client";

import { useState } from "react";

import { NewsArticle } from "@/services/news.types";

import NewsCards from "./NewsCardsCarousel";
import NewsCarousel from "./FrontArticle";
import NewsCardsCarousel from "./NewsCardsCarousel";

type NewsSections = {
  title: string;
  news: NewsArticle[];
};

interface NewsCardsWrapperProps {
  sections: NewsSections[];
}

export default function NewsCardsWrapper({
  sections,
}: NewsCardsWrapperProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const nationalNewsSection = sections.find(
    (section: NewsSections) => section.title === "Nacionales"
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

      {/* Nacionales */}
      <section
        id="nacionales"
        className="section-content"
      >
        <h5 className="section-title">
          Nacionales · Entérate del acontecer nacional
        </h5>

        <NewsCardsCarousel
          news={nationalNewsSection?.news ?? []}
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