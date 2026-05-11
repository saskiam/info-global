


import { NewsArticle } from "@/services/news.types";
import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";


export default  function FrontArticle( {mainArticle} : {mainArticle: NewsArticle}) {
    

  return (
    <section className="relative w-full overflow-hidden ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
      >
        
          <div
            className="
              relative
              min-w-full
              overflow-hidden
            "
          >
            {/* height responsivo */}
            <div
              className="
                relative
                h-75
                sm:h-87.5
                md:h-112.5
                lg:h-150
              "
            >
              <Image
                src={mainArticle?.coverImage?.src || "/no-img.jpg" }
                alt={
                  "no image"
                }
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* Contentenido de artículo principal y botón  de navegación  */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-10
                  w-full
                  p-4
                  sm:p-6
                  md:p-10
                "
              >
                <div className="max-w-2xl px-5">
                  <span
                    className="
                      rounded-full
                      bg-white/20
                      px-3
                      py-1
                      text-xs
                      text-white
                      backdrop-blur

                      md:text-sm
                    "
                  >
                    {mainArticle?.category.toUpperCase()}
                  </span>

                  <h2
                    className="
                      mt-4
                      text-2xl
                      font-bold
                      text-white

                      sm:text-2xl

                      lg:text-4xl
                    "
                  >
                    {mainArticle?.title}
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      text-gray-200

                      sm:text-base

                      lg:text-lg
                    "
                  >
                    {mainArticle?.excerpt}
                  </p>
                 <Avatar avatar={mainArticle?.author?.avatar} authorName={mainArticle?.author?.name} className=" text-white pt-1"/>
                  <button
                    className="
                      mt-6
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      font-medium
                      text-black
                      transition
                      hover:scale-105
                    "
                  >
                   <Link
        href={`/article/${mainArticle.slug}`}
    
      >
        Leer más
      </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>

     

  
     
    </section>
  );
}