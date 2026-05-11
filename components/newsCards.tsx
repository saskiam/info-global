import { formatDate } from "@/helpers/formatDate"
import { NewsArticle } from "@/services/news.types"
import Image from "next/image"
import Link from "next/link"

type NewCarouselProps = {
news: NewsArticle[]
}
export default function NewsCards({news}: NewCarouselProps) {

    return (
  <div id="nacionales" className="py-8 lg:mx-12 sm:mx-auto justify-center items-center   xl:px-12 sm:px-6 lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Enterate de lo que está pasando a nivel nacional</h2>
      </div> 
       <div  className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
       
    {news?.map((card) => (
       
         <article
  key={card.title}
  className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  {/* Imagen superior */}
  <Image
    className="w-full h-48 object-cover"
    src={card.coverImage?.src || "/no-img.jpg"}
    width={900}
    height={500}
    alt="Blog cover"
  />

  {/* Contenido */}
  <div className="p-6">
    <div className="flex justify-between items-center mb-5 text-gray-500">
      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
        {card.category}
      </span>

      <span className="text-sm">{ formatDate(card.publishedAt) }</span>
    </div>

    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href="#">{card.title}</a>
    </h2>

    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
      {card.excerpt}
    </p>

    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image
          className="w-7 h-7 rounded-full"
          src={card.author.avatar}
          width={500}
          height={500}
          alt={card.author.name}
        />

        <span className="font-medium dark:text-white">
          {card.author.name}
        </span>
      </div>

    
      <Link
        href={`/article/${card?.slug}`}
       >
        Leer mas
        </Link>
    </div>
  </div>
</article> 
        
      ))}
      </div>
      
  </div>


    )
}