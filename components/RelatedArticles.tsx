
import { getNewsByCategory } from "@/services/news.service";
import Image from "next/image";

interface RelatedArticlesProps {
  categoryName: string;
  mainArticleSlug: string;
}


export default async function RelatedArticles( { categoryName, mainArticleSlug }: RelatedArticlesProps) {

  const relatedArticles = await getNewsByCategory(categoryName);

  console.log(RelatedArticles)

    return (
        <aside
  className="py-8 lg:py-24 bg-gray-80 dark:bg-orange-800/30 items-center justify-center"
>
  <div className="px-4 mx-auto max-w-screen-xl justify-center items-center">
    <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
      Artículos relacionados
    </h2>

    <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
      
      {relatedArticles.slice(0, 4).filter((article) => article.slug !== mainArticleSlug).map((article) => (
        <article key={article.id} className="max-w-xs">
          <a href="#">
            <Image
              src={article.coverImage?.src || "/no-Img.jpg"}
              className="mb-5 rounded-lg"
              width={300}
              height={200}
              alt={article.title}
            />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">{article.title}</a>
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            {article.excerpt || ""}
          </p>
        </article>
      ))}

    </div>
  </div>
</aside>
    )
}