
import NewsCardsWrapper from "@/components/NewsCardsWrapperr";
import NewsCarousel from "@/components/FrontArticle"; 
import { getNews, getNewsByCategory } from "@/services/news.service";
import { NewsArticle } from "@/services/news.types";
// import NewsCards from "./comp

type NewsSections = {
  title: string;
  news: NewsArticle[];
};

export default async function Home() {


  //crear arreglo de news por 3 categorias: politica, tecnologia, deportes
  const newsSections: NewsSections[] = [
    {
      title: "Ciencia",
      news: await getNewsByCategory("ciencia")
    },
    {
      title: "Tecnologia",
      news: await getNewsByCategory("tecnologia")
    },
    {
      title: "Deportes",
      news: await getNewsByCategory("deportes")
    }
  ]
  
   


  return (
     <div className="bg-[#EEE9DF] min-h-screen space-y-4" >
      <main className="flex flex-1 w-full min-h-screen  flex-col items-center justify-between   bg-white sm:items-start">
       <section className=" w-full" >
        < NewsCardsWrapper sections={newsSections} />
       </section>
    
      </main>
    
      </div>
    
  );
}
