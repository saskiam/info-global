import { getArticleBySlug } from "@/services/news.service";
import Image from "next/image";
import { Block } from "@/services/news.types";
import { formatDate } from "@/helpers/formatDate";
import Avatar from "@/components/Avatar";
import FBIcon from "@/components/icons/FBIcon";
import WTIcon from "@/components/icons/WTIcon";
import XIcon from "@/components/icons/XIcon";
import RelatedArticles from "@/components/RelatedArticles";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
const { slug } = await params
 const article = await getArticleBySlug(slug)


  return ( 
    
  <main className=" pb-16 lg:pt-8 lg:pb-24 max-w-screen bg-white dark:bg-white antialiased">
      
         <div className="flex justify-center items-center h-80">
  <div className="relative inline-block">
    <Image
      src={article.coverImage?.src || "/no-Img.jpg"}
      width={1300}
      height={300}
      alt="demo"
    />

   
  </div>
</div>
   <div className="px-4 mx-auto max-w-7xl flex justify-center">
  <article className="w-full max-w-4xl z-10 bg-white mb-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert lg:text-justify">
    <header className="mb-4 lg:m-6">
       <span
      className="
        px-3 py-1
        text-sm font-bold
        bg-amber-500 text-white
        rounded 
      "
    >
      {article.category?.toUpperCase()}
    </span>
  
      <h1 className="my-5 mx-10  text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
        {article.title}
      </h1>

      <p className="mb-8 mx-10 text-lg font-normal text-gray-200 lg:text-xl dark:text-gray-500">
        {article.excerpt}
      </p>

     <div className=" flex flex-col md:flex-row
  items-center md:items-start
  justify-between
  gap-6
  mx-10 mb-6">

  {/* AUTHOR */}
  <address className="not-italic">
    <div className="flex items-start justify-start mr-3 text-sm text-gray-900 dark:text-white">
      <div>
        <Avatar avatar={article.author?.avatar} authorName={article.author?.name} className=" text-gray-600 text-lg"/>

        <p className="text-sm text-gray-200 dark:text-gray-500">
          {article.author?.bio}
        </p>

        <p className="text-sm text-gray-200 dark:text-gray-500">
          <time title="February 8th, 2022">
            { "publicado : " + formatDate(article.publishedAt)}
          </time>
        </p>
      </div>

    </div>
  </address>

  {/* SECTION AL LADO */}
  <section className="text-center justify-center mt-4 md:mt-0">
    <p className="text-sm text-gray-500">
     compartelo en tus redes sociales
    </p>

    <div className="flex gap-5 mt-2 justify-center">

 <FBIcon action="share"/>
  <WTIcon action="share"/>
  <XIcon action="share"/>

 

</div>
  </section>

</div>
    </header>
    <section className="space-y-6 mx-15 mb-8  text-gray-700">

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
          )

        case "heading":
          return (
            <h2
              key={article.slug + index}
              className="text-2xl font-bold mt-5 "
            >
              {block.text}
            </h2>
          )

        case "image":
          return (
            <Image
              key={article.slug}
              src={block.src}
              alt={block.alt}
              width={1200}
              loading="eager"
              height={700}
              className="rounded-xl w-full"
            />
          )

        case "quote":
          return (
            <blockquote
              key={article.slug + index}
              className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
            >
              {block.text}
            </blockquote>
          )

        case "list":
          return (
            <ul
              key={article.slug + index}
              className="list-disc pl-6 space-y-2"
            >
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )

        default:
          return null
      }

    })}

  </section>

  </article>
  

</div>
<RelatedArticles categoryName={article.category} mainArticleSlug={article.slug}/>

  </main>


)

}