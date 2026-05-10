
/**
 * Definiendo tipados para el tipo de contenido y
 * articulos de noticias
 */

export type ParagraphBlock = {
    type: "paragraph";
    text: string;
};

export type HeadingBlock = {
    type: "heading";
    text: string;
};

export type ImageBlock = {
    type: "image";
    url: string;
    alt: string;
    caption?: string;

}

export type QuoteBlock = {
    type: "quote";
    text: string;
    author?: string;
}

export type ListBlock = {
    type: "list";
    style: "bullet" | "number";
    items: string[];
}

export type Block =   | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | QuoteBlock
  | ListBlock;

export type CoverImage = {
    url: string;
    alt: string;
};

export type Author = {
    name: string;
    avatar: string;
};

export type NewsArticle = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage: CoverImage;
    author: Author;
    publishedAt: string;
    category: string;
    tags: string[];
    body: Block[];
};
