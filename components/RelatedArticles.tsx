
import { getNewsByCategory } from "@/services/news.service";
import Image from "next/image";
import Link from "next/link";

interface RelatedArticlesProps {
  categoryName: string;
  mainArticleSlug: string;
}


export default async function RelatedArticles( { categoryName, mainArticleSlug }: RelatedArticlesProps) {

  const relatedArticles = await getNewsByCategory(categoryName);


    return (
        <aside
  className="py-8 lg:py-24 bg-gray-80 dark:bg-orange-800/30 items-center justify-center"
>
  <div className="px-4 mx-auto max-w-screen-xl justify-center items-center">
    <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
      Artículos relacionados a {categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase()}
    </h2>

    <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-start">
      
      {relatedArticles.slice(0, 4).filter((article) => article.slug !== mainArticleSlug).map((article) => (
        <article key={article.id} className="max-w-xs">
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
    )
}