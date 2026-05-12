import { getNewsByCategory } from "@/services/news.service";

import Image from "next/image";
import Link from "next/link";

import { RelatedArticlesProps } from "./Components.Interface";

export default async function RelatedArticles({
  categoryName,
  mainArticleSlug,
}: RelatedArticlesProps) {
  // Obtener artículos relacionados a la categoria
  const relatedArticles = await getNewsByCategory(categoryName);

  return (
    <aside
      className="
        items-center
        justify-center
        bg-gray-80
        py-8
        dark:bg-orange-800/30
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl items-center justify-center px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Artículos relacionados a{" "}
          {categoryName.charAt(0).toUpperCase() +
            categoryName.slice(1).toLowerCase()}
        </h2>

        <div className="grid place-items-start gap-12 sm:grid-cols-1 lg:grid-cols-3">

          {/* Renderizar al menos 4(slice) artículos distintos(filter) 
           de la categoria seleccionada */}
          {relatedArticles
            .slice(0, 4)
            .filter(
              (article) => article.slug !== mainArticleSlug
            )
            .map((article) => (
              <article
                key={article.id}
                className="max-w-xs"
              >
                <Link
                  href={`/article/${article.slug}`}
                  className="block"
                >
                  <Image
                    src={article.coverImage?.src || "/no-Img.jpg"}
                    className="mb-5 rounded-lg"
                    width={300}
                    height={200}
                    alt={article.title}
                  />

                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-yellow-700">
                    {article.title}
                  </h2>

                  <p className="mb-4 text-gray-500 dark:text-gray-800">
                    {article.excerpt || article.title}
                  </p>
                </Link>
              </article>
            ))}
        </div>
      </div>
    </aside>
  );
}