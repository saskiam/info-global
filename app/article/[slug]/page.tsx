import { getArticleBySlug } from "@/services/news.service";
import Image from "next/image";

import { Block } from "@/services/news.types";
import { formatDate } from "@/helpers/formatDate";

import Avatar from "@/components/Avatar";
import FBIcon from "@/components/icons/FBIcon";
import WTIcon from "@/components/icons/WTIcon";
import XIcon from "@/components/icons/XIcon";
import RelatedArticles from "@/components/RelatedArticles";

import NotFound from "@/app/not-found";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  /** obtener parametros de la url y el articulo */
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  /**
   * En caso de no encontrar el artículo en la data,
   * redirigimos a la página de NotFound
   */
  if (!article) {
    return <NotFound />;
  }


  return (
    <main className="max-w-screen bg-white pb-16 antialiased dark:bg-white lg:pt-8 lg:pb-24">
      <div className="flex h-80 items-center justify-center">
        <div className="relative inline-block">
          {/** Imagen de portada */}
          <Image
            src={article.coverImage?.src || "/no-Img.jpg"}
            width={1300}
            height={300}
            alt="demo"
          />
        </div>
      </div>

      {/* Contenido principal del articulo */}
      <div className="mx-auto flex max-w-7xl justify-center px-4">
        <article className="format format-sm z-10 mb-8 w-full max-w-4xl bg-white sm:format-base lg:format-lg lg:text-justify dark:format-invert">
          <header className="mb-4 lg:m-6">
            <span
              className="
                rounded
                bg-amber-500
                px-3 py-1
                text-sm font-bold
                text-white
              "
            >
              {article.category?.toUpperCase()}
            </span>

            <h1 className="my-5 mx-10 text-3xl font-extrabold leading-tight text-gray-900 dark:text-black lg:mb-6 lg:text-4xl">
              {article.title}
            </h1>

            <p className="mx-10 mb-8 text-lg font-normal text-gray-200 dark:text-gray-500 lg:text-xl">
              {article.excerpt}
            </p>

            <div
              className="
                mx-10 mb-6 flex flex-col items-center justify-between gap-6
                md:flex-row md:items-start
              "
            >
              {/* Información del autor */}
              <address className="not-italic">
                <div className="mr-3 flex items-start justify-start text-sm text-gray-900 dark:text-white">
                  <div>
                    <Avatar
                      avatar={article.author?.avatar}
                      authorName={article.author?.name}
                      className="text-lg text-gray-600"
                    />

                    <p className="text-sm text-gray-200 dark:text-gray-500">
                      {article.author?.bio}
                    </p>

                    <p className="text-sm text-gray-200 dark:text-gray-500">
                      <time title="February 8th, 2022">
                        {"publicado : " +
                          formatDate(article.publishedAt)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>

              {/* Iconos customizados para compartir */}
              <section className="mt-4 justify-center text-center md:mt-0">
                <p className="text-sm text-gray-500">
                  compartelo en tus redes sociales
                </p>

                <div className="mt-2 flex justify-center gap-5">
                  <FBIcon action="share" />
                  <WTIcon action="share" />
                  <XIcon action="share" />
                </div>
              </section>
            </div>
          </header>
                  {/* Renderizar el contenido segun el tipo encontrado */}         
          <section className="mx-15 mb-8 space-y-6 text-gray-700">
            {article.body.map((block: Block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={article.slug + index}
                      className="text-lg leading-8 text-justify text-gray-700"
                    >
                      {block.text}
                    </p>
                  );

                case "heading":
                  return (
                    <h2
                      key={article.slug + index}
                      className="mt-5 text-2xl font-bold"
                    >
                      {block.text}
                    </h2>
                  );

                case "image":
                  return (
                    <Image
                      key={article.slug + index}
                      src={block.src}
                      alt={block.alt}
                      width={1200}
                      height={700}
                      loading="eager"
                      className="w-full rounded-xl"
                    />
                  );

                case "quote":
                  return (
                    <blockquote
                      key={article.slug + index}
                      className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
                    >
                      {block.text}
                    </blockquote>
                  );

                case "list":
                  return (
                    <ul
                      key={article.slug + index}
                      className="list-disc space-y-2 pl-6"
                    >
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </section>
        </article>
      </div>
            {/* Sección de articulos relacionados */} 
      <RelatedArticles
        categoryName={article.category}
        mainArticleSlug={article.slug}
      />
    </main>
  );
}