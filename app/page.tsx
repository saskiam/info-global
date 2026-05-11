import Image from "next/image";
import Navbar from "@/components/Navbar";
import NewsCarousel from "@/components/NewsCarousel"; 
import { getNews } from "@/services/news.service";
import { NewsArticle } from "@/services/news.types";
import NewsCards from "@/components/newsCards";
// import NewsCards from "./comp

export default async function Home() {
   const news: NewsArticle[] = await getNews();

   // filter news by category
   const newsByCategory = (category: string) => {
    return news.filter((article) => article.category === category);
  };
   


  return (
     <div className="bg-[#EEE9DF] min-h-screen space-y-4" >
      <main className="flex flex-1 w-full min-h-screen  flex-col items-center justify-between   bg-white sm:items-start">
       <section className=" w-full" >
        <NewsCarousel news={newsByCategory("cultura")} />
       </section>
      <section className="w-full  flex-1 mt-12 sm:mt-0 flex flex-col items-center justify-center sm:items-start" >
        <NewsCards news={newsByCategory("tecnologia")} />
       </section>
      </main>
    
      </div>
    
  );
}
