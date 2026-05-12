
import NewsCardsWrapper from "@/components/NewsCardsWrapperr";
import { getNewsByCategory } from "@/services/news.service";
import { NewsArticle } from "@/services/news.types";

type NewsSections = {
  title: string;
  news: NewsArticle[];
};

export default async function Home() {
  //crear arreglo de news por 3 categorias: Ciencia, tecnologia, deportes
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
        {/* wrapper  para los news cards */}
        < NewsCardsWrapper sections={newsSections} />
       </section>
    
      </main>
    
      </div>
    
  );
}
