// interface y types usados por los componentes

import { NewsArticle } from "@/services/news.types";

export interface AvatarProps {
    avatar?: string;
    authorName: string;
    className?: string;
}

export interface FrontArticleProps {
  mainArticle: NewsArticle;
}


export interface NewsCardProps {
  news: NewsArticle[];
  setHoveredSlug: (slug: string | null) => void;
}

export type NewsSections = {
  title: string;
  news: NewsArticle[];
};

export interface NewsCardsWrapperProps {
  sections: NewsSections[];
}

export interface RelatedArticlesProps {
  categoryName: string;
  mainArticleSlug: string;
}
