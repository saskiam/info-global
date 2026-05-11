import { getArticleBySlug } from "@/services/news.service";
import Image from "next/image";
import { Block } from "@/services/news.types";
import { formatDate } from "@/helpers/formatDate";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
const { slug } = await params
 const article = await getArticleBySlug(slug)


  return ( 
    
  <main className=" pb-16 lg:pt-8 lg:pb-24 max-w-screen bg-white dark:bg-white antialiased">
        {/* <figure className="w-full justify-center items-center flex h-90 "><Image src={article.coverImage?.src || "/no-Image.jpg"} width={900} height={1250} alt=""/>          
          </figure> */}
         <div className="flex justify-center items-center h-80">
  <div className="relative inline-block">
    <Image
      src={article.coverImage?.src || "/no-Img.jpg"}
      width={900}
      height={300}
      alt="demo"
    />

    <span
      className="
        absolute
        lg:bottom-28 sm:bottom-10 left-4
        px-3 py-1
        text-xs font-bold
        bg-amber-500 text-white
        rounded-full
      "
    >
      {article.category?.toUpperCase()}
    </span>
  </div>
</div>
   <div className="px-4 mx-auto max-w-7xl flex justify-center">
  <article className="w-full max-w-4xl z-10 bg-white mb-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert lg:text-justify">
    <header className="mb-4 lg:m-6">
  
      <h1 className="my-4 mx-10  text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
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

      <Image
        className="mr-4 w-16 h-16 rounded-full"
        src={article.author?.avatar || "/no-Img.jpg"}
        width={100}
        height={100}
        alt="Jese Leos"
      />

      <div>
        <a
          href="#"
          rel="author"
          className="text-base font-bold text-gray-900 dark:text-gray-600"
        >
          {article.author?.name}
        </a>

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
     Síguenos en nuestras redes sociales
    </p>

    <div className="flex gap-5 mt-2 justify-center">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      bg-gray-100
      hover:bg-blue-100
      text-sm font-bold
      text-blue-700
      transition
    "
  >
    FB
  </a>

  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      bg-gray-100
      hover:bg-gray-300
      text-sm font-bold
      text-black
      transition
    "
  >
    X
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      bg-gray-100
      hover:bg-pink-100
      text-sm font-bold
      text-red-700
      transition
    "
  >
    IG
  </a>

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
              key={index}
              className="text-lg leading-8 text-justify text-gray-700"
            >
              {block.text}
            </p>
          )

        case "heading":
          return (
            <h2
              key={index}
              className="text-2xl font-bold mt-5 "
            >
              {block.text}
            </h2>
          )

        case "image":
          return (
            <Image
              key={index}
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
              key={index}
              className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
            >
              {block.text}
            </blockquote>
          )

        case "list":
          return (
            <ul
              key={index}
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
 <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-80 dark: bg-orange-800/30">
  <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-4">
          <article className="max-w-xs">
              <a href="#">
                  <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" width ={300} height={200} alt="Image 1"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" width ={300} height={200} alt="Image 2"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 12 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" width ={300} height={200} alt="Image 3"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 8 minutes
              </a>
          </article>
         
      </div>
  </div>
</aside>
  </main>


)

}